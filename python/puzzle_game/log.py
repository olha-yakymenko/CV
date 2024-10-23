# game_logic.py

import pygame
import random
import sys

WIDTH, HEIGHT = 600, 600
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
screen = pygame.display.set_mode((WIDTH, HEIGHT))

def get_player_name(WIDTH, HEIGHT, screen):
    """
    Prosi gracza o wprowadzenie imienia przy użyciu Pygame i zwraca wprowadzone imię.
    """
    font = pygame.font.Font(None, 36)
    input_text = ""
    input_rect = pygame.Rect(WIDTH // 3, HEIGHT // 2, WIDTH // 2, 40)
    color_inactive = pygame.Color('lightskyblue3')
    color_active = pygame.Color('dodgerblue2')
    color = color_inactive
    active = False
    text = font.render("Wprowadź swoje imię: ", True, (0, 0, 0))
    text_rect = text.get_rect(topleft=(WIDTH // 3.5, HEIGHT // 2 - 50))
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == pygame.MOUSEBUTTONDOWN:
                if input_rect.collidepoint(event.pos):
                    active = not active
                else:
                    active = False
                color = color_active if active else color_inactive
            if event.type == pygame.KEYDOWN:
                if active:
                    if event.key == pygame.K_RETURN:
                        return input_text
                    elif event.key == pygame.K_BACKSPACE:
                        input_text = input_text[:-1]
                    else:
                        input_text += event.unicode
        screen.fill(WHITE)
        pygame.draw.rect(screen, color, input_rect, 2)
        screen.blit(text, text_rect)
        width = max(200, font.size(input_text)[0] + 10)
        input_rect.w = width
        pygame.draw.rect(screen, color, input_rect)
        pygame.draw.rect(screen, (0, 0, 0), input_rect, 2)
        text_surface = font.render(input_text, True, (0, 0, 0))
        screen.blit(text_surface, (input_rect.x + 5, input_rect.y + 5))
        pygame.display.flip()

def display_results_table_on_screen(WIDTH, HEIGHT, WHITE, screen, results):
    """
    Wyświetla tabelę wyników na ekranie Pygame. Jeśli brak wyników, wyświetla komunikat o braku wyników. Zwraca True, jeśli tabela jest wyświetlona, a False w przeciwnym razie.
    """
    if not results:
        font = pygame.font.Font(None, 36)
        text = font.render("Brak wyników do wyświetlenia.", True, (0, 0, 0))
        text_rect = text.get_rect(center=(WIDTH // 2, HEIGHT // 2))
        screen.fill(WHITE)
        screen.blit(text, text_rect)
        pygame.display.flip()
        return False
    font = pygame.font.Font(None, 24)
    table_x, table_y = WIDTH // 4, HEIGHT // 4
    table_width, table_height = WIDTH // 2, HEIGHT // 2
    table_surface = pygame.Surface((table_width, table_height))
    table_surface.fill(WHITE)
    header_text = font.render("Tabela wyników", True, (0, 0, 0))
    header_rect = header_text.get_rect(center=(table_width // 2, 30))
    table_surface.blit(header_text, header_rect)
    row_height = 30
    for i, result in enumerate(sorted(results, key=lambda x: float(x.get('time_seconds', 0.0)) if isinstance(x.get('time_seconds'), (int, float)) else 0.0)):
        time_seconds = float(result.get('time_seconds', 0.0)) if isinstance(result.get('time_seconds'), (int, float)) else 0.0
        name_text = font.render(result.get('player_name', ''), True, (0, 0, 0))
        time_text = font.render(f"{time_seconds:.2f} s", True, (0, 0, 0))
        table_surface.blit(name_text, (10, 60 + i * row_height))
        table_surface.blit(time_text, (table_width - 100, 60 + i * row_height))
    screen.blit(table_surface, (table_x, table_y))
    pygame.display.flip()
    return True# game_logic.py




