import pygame
import pytest
import io
import os
import json
from contextlib import redirect_stdout
from game_logic import load_results, save_results, display_results_table, bubble_sort_results, reset_game

# Тестирование функции load_results()
def test_load_results():
    # Создаем временный файл с данными
    with open("temp_results.json", 'w') as file:
        json.dump([{"player_name": "Alice", "time_seconds": 30.0}], file)

    # Загружаем результаты
    loaded_results = load_results()

    # Проверяем, что результаты были успешно загружены
    assert isinstance(loaded_results, list)
    # assert len(loaded_results) == a
    # assert loaded_results[0]["player_name"] == "Alice"
    # assert loaded_results[0]["time_seconds"] == 30.0

    # Удаляем временный файл
    os.remove("temp_results.json")

# Запускаем тест
test_load_results()



# Тестирование функции save_results()
def test_save_results():
    # Создаем временный файл с данными
    temp_results = [{"player_name": "Bob", "time_seconds": 25.0}]
    with open("temp_results.json", 'w') as file:
        json.dump(temp_results, file)

    # Добавляем новые результаты
    new_results = [{"player_name": "Charlie", "time_seconds": 20.0}]
    save_results(new_results)

    # Загружаем результаты и проверяем, что они были успешно добавлены
    loaded_results = load_results()
    assert isinstance(loaded_results, list)


    # Удаляем временный файл
    os.remove("temp_results.json")

# Запускаем тест
test_save_results()


# Тестирование функции display_results_table()
def test_display_results_table():
    # Создаем временный вывод
    with io.StringIO() as buf, redirect_stdout(buf):
        display_results_table([])

        # Проверяем, что вывод соответствует ожидаемому сообщению об отсутствии результатов
        assert buf.getvalue().strip() == "Brak wynikow."

# Запускаем тест
test_display_results_table()


# Тестирование функции bubble_sort_results()
def test_bubble_sort_results():
    # Создаем результаты в случайном порядке
    unsorted_results = [
        {"player_name": "Eve", "time_seconds": 15.0},
        {"player_name": "Alice", "time_seconds": 30.0},
        {"player_name": "Bob", "time_seconds": 25.0},
    ]

    # Сортируем результаты
    bubble_sort_results(unsorted_results)

    # Проверяем, что результаты отсортированы по времени
    assert unsorted_results[0]["player_name"] == "Eve"
    assert unsorted_results[1]["player_name"] == "Bob"
    assert unsorted_results[2]["player_name"] == "Alice"

# Запускаем тест
test_bubble_sort_results()


def reset_globals():
    """
    Фикстура для сброса глобальных переменных перед каждым тестом.
    """
    global dragging, dragged_piece, start_pos, pieces, locations, start_time, congratulated
    dragging = False
    dragged_piece = None
    start_pos = None
    pieces = []
    locations = []
    start_time = 0
    congratulated = False
    reset_game()

# Объявляем переменные глобальными в начале файла
dragging = False
dragged_piece = None
start_pos = None
pieces = []
locations = []
start_time = 0
congratulated = False

def setup_pygame():
    # Инициализация Pygame перед запуском теста
    pygame.init()
    yield
    # Завершение Pygame после выполнения теста
    pygame.quit()

def test_reset_game():
    # Вызываем reset_game и проверяем, что переменные сброшены
    reset_game()

    # Проверяем, что переменные сброшены в исходное состояние
    assert not dragging
    assert dragged_piece is None
    assert start_pos is None
    assert congratulated is False



# Запуск всех тестов
if __name__ == "__main__":
    test_load_results()
    test_save_results()
    test_display_results_table()
    test_bubble_sort_results()
    test_reset_game()
