document.getElementById('main__section__galeria__select').onchange =
  function () {
    let selectores = {
      1: 'card_1',
      2: 'card_2',
      3: 'card_3',
      4: 'card_4',
      5: 'card_5',
      6: 'card_6',
      7: 'card_7',
      8: 'card_8',
    };
    if (this.value == 0) {
      for (let id in selectores)
        document.getElementById(selectores[id]).style.display = 'block';
    } else {
      for (let id in selectores)
        document.getElementById(selectores[id]).style.display = 'none';

      document.getElementById(selectores[this.value]).style.display = 'block';
    }
  };
