from pathlib import Path

'''This file contains the default keys and values used to correct invalid data on startup.'''

class Settings:
    '''Default values for the settings of the application.'''
    path_keys: dict = {
        'output_folder': str((Path().home() / 'Downloads').absolute())
    }
    misc_keys: dict = {
        'dark_theme': False
    }

    DEFAULT_KEYS: dict = {
        'paths': path_keys,
        'misc': misc_keys
    }

class Columns:
    '''Default values of the column filters from the file to the application.'''
    immutable_data: list = []
    hardware_data: list = []
    software_data: list = []

    DEFAULT_KEYS: dict = {
        'immutable': immutable_data,
        'hardware': hardware_data,
        'software': software_data
    }