# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from tika import parser

raw = parser.from_file('sample.pdf')
print(raw['content'])