# menu.py
import pygame
import sys
import random
def display_menu(WIDTH, HEIGHT, WHITE, screen):
    """
    Wyświetla menu z dwoma przyciskami: "Graj" i "Wyjdź". Jeśli gracz naciśnie "Graj", funkcja zwraca True, w przeciwnym razie - False.
    """
    font = pygame.font.Font(None, 36)
    play_text = font.render("Graj", True, (0, 0, 0))
    play_rect = play_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 - 30))
    exit_text = font.render("Wyjdź", True, (0, 0, 0))
    exit_rect = exit_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 + 30))
    screen.fill(WHITE)
    screen.blit(play_text, play_rect)
    screen.blit(exit_text, exit_rect)
    pygame.display.flip()
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1:
                    if play_rect.collidepoint(event.pos):
                        return True  # Rozpocznij grę
                    elif exit_rect.collidepoint(event.pos):
                        pygame.quit()
                        sys.exit()
