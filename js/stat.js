var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
  var maxTime = 0;
  for (var j = 0; j < times.length; j++) {
    if (times[j] > maxTime) {
      maxTime = Math.round(times[j]);
    }
  }
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    var name = names[i];
    ctx.fillText(name, (150 + 90 * i), 240);
    var time = Math.round(times[i]);
    var timeHeight = Math.round((130 * time) / maxTime);
    ctx.fillText(time, (150 + 90 * i), (200 - timeHeight));
    if (name === 'Вы') {
    ctx.fillStyle = 'red';
    } else ctx.fillStyle = 'rgba(0, 0, 0,' + Math.random() + ')';
    ctx.fillRect((150 + 90 * i), (220 - timeHeight), 40, timeHeight);
  }
};
