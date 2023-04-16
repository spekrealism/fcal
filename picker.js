const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    locale: {
        previousMonth: "<",
        nextMonth: ">"
    },
    lang: "ru-RU",
    RangePlugin: {
        locale: {
            one: "день",
            two: "дня",
            few: "дня",
            many: "дней"
        }
    },
    plugins: [
        "RangePlugin"
    ],
    setup(picker) {
       picker.on('select', (e) => {
          let startDate = picker.getStartDate('DD MMM YYYY');
          let endDate = picker.getEndDate('DD MMM YYYY');
          const diffTime = Math.abs(endDate - startDate) + 1;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          document.getElementById('test').innerHTML = 'Start date: '+startDate+' End date: '+endDate+ 'Дней выбрано:' + diffDays;
          window.diffDays = diffDays;
       });
    },
})