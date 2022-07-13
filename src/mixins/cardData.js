export const card = {
  data() {
    return {
      dataToSend: {
        name: "",
        surname: "",
        description: "",
        mail: "",
        link: "",
        phone: "",
        backgroundColor: "",
        textColor: "",
        linksColor: "",
        textPosition: "",
        linksPosition: "",
        sizeText: 30,
        sizeCont: 20,
        textJustify: "",
        contJustify: ""
      },
      formFill: [
        {
          textPlaceholder: "Имя",
          value: "name",
          data: ""
        },
        {
          textPlaceholder: "Фамилия",
          value: "surname",
          data: ""
        },
        {
          textPlaceholder: "Описание",
          value: "description",
          data: ""
        },
        {
          textPlaceholder: "Почта",
          value: "mail",
          data: ""
        },
        {
          textPlaceholder: "Ссылка",
          value: "link",
          data: ""
        },
        {
          textPlaceholder: "Телефон",
          value: "phone",
          data: ""
        }
      ]
    };
  },
  methods: {}
};
