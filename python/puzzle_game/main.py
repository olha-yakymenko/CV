import pygame
import sys
import random
from game_logic import reset_game, load_results, save_results, display_results_table
from log import get_player_name, display_results_table_on_screen
from menu import display_menu
def reset_game(): #rozpoczyna nowa gre
    global dragging, dragged_piece, start_pos, pieces, locations, start_time, congratulated
    dragging = False
    dragged_piece = None
    start_pos = None
    congratulated = False
    original_image = pygame.image.load("your_image.jpg")
    original_rect = original_image.get_rect()
    rows, cols = 3, 3
    piece_width, piece_height = original_rect.width // cols, original_rect.height // rows
    pieces = [original_image.subsurface(pygame.Rect(col * piece_width, row * piece_height, piece_width, piece_height))
              for row in range(rows) for col in range(cols)]
    random.shuffle(pieces)
    locations = [(col * piece_width, row * piece_height) for row in range(rows) for col in range(cols)]   #krotka
    start_time = pygame.time.get_ticks()
def main_loop():
    global dragging, dragged_piece, start_pos, pieces, locations, start_time, congratulated, player_name, results, results_table_displayed_console
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1 and not dragging and not congratulated:  # Lewy przycisk myszy
                for i, location in enumerate(locations):
                    rect = pygame.Rect(location, (piece_width, piece_height)) #krotka
                    if rect.collidepoint(event.pos):
                        dragging = True
                        dragged_piece = i
                        start_pos = event.pos
                        break
        elif event.type == pygame.MOUSEBUTTONUP:
            if event.button == 1 and dragging and not congratulated:
                for i, location in enumerate(locations):
                    rect = pygame.Rect(location, (piece_width, piece_height))
                    if i != dragged_piece and rect.collidepoint(event.pos):
                        pieces[dragged_piece], pieces[i] = pieces[i], pieces[dragged_piece]
                        break
                dragging = False; dragged_piece = None; start_pos = None
    screen.fill(WHITE)
    for i, location in enumerate(locations):
        screen.blit(pieces[i], location)
    current_image = pygame.Surface((original_rect.width, original_rect.height))
    for i, location in enumerate(locations):
        current_image.blit(pieces[i], location)
    if not congratulated:
        if pygame.image.tostring(current_image, "RGB") == pygame.image.tostring(original_image, "RGB"):
            congratulated = True
            start_time = pygame.time.get_ticks() - start_time  # Zatrzymanie licznika czasu po ułożeniu układanki
            # Zapisanie wyniku gry
            result = {
                'player_name': player_name,
                'time_seconds': start_time / 1000
            }
            results.append(result)
            save_results(results)
    if congratulated:
        font = pygame.font.Font(None, 36)
        text = font.render(f"Gratulacje, {player_name}! Twój wynik {start_time / 1000:.2f} sekundy!", True,WHITE)
        text_rect = text.get_rect(center=(WIDTH // 2, HEIGHT // 2))
        background_surface = pygame.Surface((text_rect.width + 20, text_rect.height + 20))  # +20 для добавления отступа
        background_surface.fill(GREEN)  # Задайте цвет фона, например, зеленый
        # Нарисовать текстовую поверхность на фоне
        background_surface.blit(text, (10, 10))  # Отступ в 10 пикселей от верхнего левого угла
        # Отображение фоновой поверхности на экране
        screen.blit(background_surface, (
        WIDTH // 2 - background_surface.get_width() // 2, HEIGHT // 2 - background_surface.get_height() // 2))
        text_rect = text.get_rect(center=(WIDTH // 2, HEIGHT // 2))
        screen.blit(text, text_rect)
        new_game_text = font.render("Nowa gra", True, GREEN)
        new_game_rect = new_game_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 + 50)); screen.blit(new_game_text, new_game_rect)
        results_text = font.render("Tabela wyników", True, GREEN)
        results_rect = results_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 + 100)); screen.blit(results_text, results_rect)
        new_game_pressed = False  # Dodanie zmiennej new_game_pressed
        # Sprawdzenie, czy został naciśnięty przycisk "Tabela wyników"
        if results_rect.collidepoint(pygame.mouse.get_pos()):
            display_results_table_on_screen(WIDTH, HEIGHT, WHITE, screen, results)
            if pygame.mouse.get_pressed()[0]:
                if not results_table_displayed_console:
                    results_table_displayed_console = True
                    display_results_table(results)
        if new_game_rect.collidepoint(pygame.mouse.get_pos()) and pygame.mouse.get_pressed()[
            0] and not new_game_pressed:
            new_game_pressed = True
            reset_game()  # Naciśnięcie przycisku "Nowa gra"
        exit_text = font.render("Wyjście", True, GREEN)
        exit_rect = exit_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 + 150))
        screen.blit(exit_text, exit_rect)
        if exit_rect.collidepoint(pygame.mouse.get_pos()) and pygame.mouse.get_pressed()[0]:
            pygame.quit()
            sys.exit()
    pygame.display.flip()
pygame.init() # Inicjalizacja Pygame
WIDTH, HEIGHT = 600, 600; WHITE = (255, 255, 255); GREEN = (0, 255, 0) # Rozmiar okna
screen = pygame.display.set_mode((WIDTH, HEIGHT)) # Inicjalizacja okna
pygame.display.set_caption("Gra w puzzle")
results = load_results() # Ładowanie wyników tylko raz na początku programu
if display_menu(WIDTH, HEIGHT, WHITE, screen):
    player_name = get_player_name(WIDTH, HEIGHT, screen) #Pobierz imię gracza
    original_image = pygame.image.load("your_image.jpg")
    original_rect = original_image.get_rect()
    rows, cols = 3, 3
    piece_width, piece_height = original_rect.width // cols, original_rect.height // rows
    pieces = [original_image.subsurface(pygame.Rect(col * piece_width, row * piece_height, piece_width, piece_height))
              for row in range(rows) for col in range(cols)]
    random.shuffle(pieces)
    locations = [(col * piece_width, row * piece_height) for row in range(rows) for col in range(cols)]
    dragging = False; dragged_piece = None; start_pos = None
    start_time = pygame.time.get_ticks()
    congratulated = False
    while True:
        main_loop()