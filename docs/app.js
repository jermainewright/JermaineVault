(function () {
  var kpis = [
    { label: 'Sprint Velocity', value: '42', theme: 'ember' },
    { label: 'Cycle Time', value: '28 hrs', theme: 'gold' },
    { label: 'Deploy Cadence', value: '7 / week', theme: 'rose' },
    { label: 'Defect Escape', value: '3%', theme: 'plum' }
  ];

  var trendSeed = [62, 48, 73, 66, 81, 57, 88, 71, 64, 90];
  var teams = ['Platform', 'API', 'Web', 'Mobile', 'SRE'];

  var kpiGrid = document.getElementById('kpiGrid');
  var bars = document.getElementById('bars');
  var feed = document.getElementById('feed');

  kpis.forEach(function (kpi) {
    var card = document.createElement('article');
    card.className = 'kpi-card ' + kpi.theme;
    card.innerHTML = '<h3>' + kpi.label + '</h3><p>' + kpi.value + '</p>';
    kpiGrid.appendChild(card);
  });

  trendSeed.forEach(function (value, index) {
    var bar = document.createElement('span');
    bar.style.height = value + '%';
    bar.style.animationDelay = index * 90 + 'ms';
    bars.appendChild(bar);
  });

  function pushFeedItem() {
    var li = document.createElement('li');
    var team = teams[Math.floor(Math.random() * teams.length)];
    var velocity = 30 + Math.floor(Math.random() * 20);
    var now = new Date();

    li.innerHTML =
      '<strong>' + team + '</strong>' +
      '<span>Velocity ' + velocity + '</span>' +
      '<time>' + now.toLocaleTimeString() + '</time>';

    feed.insertBefore(li, feed.firstChild);

    if (feed.children.length > 6) {
      feed.removeChild(feed.lastChild);
    }
  }

  for (var i = 0; i < 4; i += 1) {
    pushFeedItem();
  }

  setInterval(pushFeedItem, 2800);
})();
