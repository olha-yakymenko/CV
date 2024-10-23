import json
import random

import pygame
from prettytable import PrettyTable

RESULTS_FILE = "results.json"

results = []
results_table_displayed = False


def load_results():
    """
    Загружает результаты из файла. Если файл не найден или возникает ошибка JSON-декодирования,
    возвращает пустой список.
    """
    try:
        with open(RESULTS_FILE, 'r') as file:
            results = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        results = set()
    return results


def save_results(results):
    existing_results = load_results()

    # Удаляем старые результаты с тем же именем
    existing_results = [result for result in existing_results if
                        result['player_name'] not in [r['player_name'] for r in results]]

    # Добавляем новые результаты
    existing_results.extend(results)

    with open(RESULTS_FILE, 'w') as file:
        json.dump(existing_results, file)



def display_results_table(results):
    if not results:
        print("Brak wynikow.")
        return False

    sorted_results = results.copy()
    bubble_sort_results(sorted_results)

    table = PrettyTable()
    table.field_names = ["Imie", "Czas"]

    for result in sorted_results:
        table.add_row([result['player_name'], result['time_seconds']])

    print("Tabelka wykikow:")
    print(table)

def bubble_sort_results(results):
    n = len(results)
    for i in range(n - 1):
        for j in range(0, n - i - 1):
            # Проверяем, является ли значение по ключу 'time_seconds' числом
            time_j = float(results[j]['time_seconds']) if isinstance(results[j]['time_seconds'], (int, float)) else 0
            time_j_plus_1 = float(results[j + 1]['time_seconds']) if isinstance(results[j + 1]['time_seconds'], (int, float)) else 0

            if time_j > time_j_plus_1:
                results[j], results[j + 1] = results[j + 1], results[j]

original_image = pygame.image.load("your_image.jpg")
original_rect = original_image.get_rect()
# Function to reset the game state
def reset_game():
    """
    Сбрасывает состояние игры для начала новой игры.
    """
    global dragging, dragged_piece, start_pos, pieces, locations, start_time, congratulated

    # Очищаем переменные
    dragging = False
    dragged_piece = None
    start_pos = None
    congratulated = False

    # Перезагружаем изображение и пересоздаем части пазла
    original_image = pygame.image.load("your_image.jpg")
    original_rect = original_image.get_rect()

    rows, cols = 3, 3
    piece_width, piece_height = original_rect.width // cols, original_rect.height // rows

    pieces = [original_image.subsurface(pygame.Rect(col * piece_width, row * piece_height, piece_width, piece_height))
              for row in range(rows) for col in range(cols)]

    random.shuffle(pieces)

    locations = [(col * piece_width, row * piece_height) for row in range(rows) for col in range(cols)]

    # Сброс времени
    start_time = pygame.time.get_ticks()
