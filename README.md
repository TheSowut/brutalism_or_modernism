```python
dls = buildings.dataloaders(path)
dls.valid.show_batch(max_n=8, nrows=2)
```



![png](brutalism_or_modernism_files/brutalism_or_modernism_8_0.png)




```python
learn = vision_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(7)
```







<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>epoch</th>
      <th>train_loss</th>
      <th>valid_loss</th>
      <th>error_rate</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>1.503708</td>
      <td>1.029500</td>
      <td>0.473684</td>
      <td>00:07</td>
    </tr>
  </tbody>
</table>








<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>epoch</th>
      <th>train_loss</th>
      <th>valid_loss</th>
      <th>error_rate</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0.985326</td>
      <td>0.904235</td>
      <td>0.421053</td>
      <td>00:07</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0.841009</td>
      <td>0.707181</td>
      <td>0.394737</td>
      <td>00:07</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.653282</td>
      <td>0.518229</td>
      <td>0.263158</td>
      <td>00:08</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.530516</td>
      <td>0.467340</td>
      <td>0.210526</td>
      <td>00:10</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0.424877</td>
      <td>0.443567</td>
      <td>0.157895</td>
      <td>00:08</td>
    </tr>
    <tr>
      <td>5</td>
      <td>0.362354</td>
      <td>0.412099</td>
      <td>0.131579</td>
      <td>00:09</td>
    </tr>
    <tr>
      <td>6</td>
      <td>0.312246</td>
      <td>0.390802</td>
      <td>0.105263</td>
      <td>00:07</td>
    </tr>
  </tbody>
</table>














    Architectural style: brutalism






![png](brutalism_or_modernism_files/brutalism_or_modernism_10_3.png)



