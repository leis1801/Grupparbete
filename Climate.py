import plotly.plotly as py
import plotly.graph_objs as go

import pandas as pd

df = pd.read_csv("Sunshine.csv")
df.head()

import numpy as np




x = ["ARE"]
y = ["Year"]

data = [
  go.Histogram(
    histfunc = "count",
    y = y,
    x = x,
    name = "count"
  ),
  go.Histogram(
    histfunc = "sum",
    y = y,
    x = x,
    name = "sum"
  )
]

py.iplot(data, filename='binning function')