export default{
  data() {
    return {
      dataToSend: {
        name: "",
        surname: "",
        description: "",
        mail: "",
        link: "",
        phone: "",
        color: {
          background: "",
          text: "black",
          links: "black"
        },
        positions: {
          text: "center",
          links: "center"
        },
        sizes: {
          text: 30,
          links: 20
        },
        justify: {
          text: "center",
          links: "center"
        }
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
