export default {
  state: {
    selectors: [
      {
        id: 1,
        header: 'Марка автомобиля',
        placeholder: 'placeholder 1',
        options: ['value1', 'value2', 'value3']
      },
      {
        id: 2,
        header: 'Модель автомобиля',
        placeholder: 'placeholder 2',
        options: ['value1', 'value2', 'value3']
      },
      {
        id: 3,
        header: 'Станция метро',
        placeholder: 'placeholder 3',
        options: ['value1', 'value2', 'value3']
      },
      {
        id: 4,
        header: 'Виды услуг',
        placeholder: 'placeholder 4',
        options: ['value1', 'value2', 'value3']
      }
    ],
    selectedItems: []
  },
  getters: {
    getSelectors(state) {
      return state.selectors;
    }
  }
}