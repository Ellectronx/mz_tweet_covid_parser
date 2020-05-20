# mz_tweet_covid_parser [![Build Status](https://travis-ci.com/Ellectronx/mz_tweet_covid_parser.svg?branch=master)](https://travis-ci.com/Ellectronx/mz_tweet_covid_parser)

Skrypt parsujący tweety Ministerstwa Zdrowia dotyczące COIVD-19. Celem jest zwrócenie ilości zachorowań w poszczególnych województwach w formacie JSON.

# przykład użycia
node index "Mamy 188 nowych i potwierdzonych przypadków zakażenia #koronawirus z województw: śląskiego (113), mazowieckiego (37), dolnośląskiego (16), podlaskiego (7), łódzkiego (6), opolskiego (4), małopolskiego (2), świętokrzyskiego (1), kujawsko-pomorskiego (1) i pomorskiego (1)."

# wynik
{<br>
  '0': 16,<br>
  '1': 1,<br>
  '2': 0,<br>
  '3': 0,<br>
  '4': 6,<br>
  '5': 2,<br>
  '6': 37,<br>
  '7': 4,<br>
  '8': 0,<br>
  '9': 7,<br>
  '10': 1,<br>
  '11': 113,<br>
  '12': 1,<br>
  '13': 0,<br>
  '14': 0,<br>
  '15': 0<br>
}

klucze 0..15 to kolejne województwa w kolejności alfabetycznej
