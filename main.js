let data = {
  "currentDate": "2022-01-01",
  "events": [
      {
          _id: 1,
          "image": "https://www.iica.int/sites/default/files/ckeditor-images/feriacomidas.JPG",
          "name": "Collectivities Party",
          "date": "2021-12-12",
          "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
          "category": "Food Fair",
          "place": "Room A",
          "capacity": 45000,
          "assistance": 42756,
          "price": 5
      },
      {
          _id: 2,
          "image": "https://www.comedera.com/wp-content/uploads/2015/02/bibimbap-4887417_1280.jpg",
          "name": "Korean style",
          "date": "2022-08-12",
          "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
          "category": "Food Fair",
          "place": "Room A",
          "capacity": 45000,
          "assistance": 42756,
          "price": 10
      },
      {
          _id: 3,
          "image": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/12/Trex.jpg?fit=1500%2C909&quality=50&strip=all&ssl=1",
          "name": "Jurassic Park",
          "date": "2021-11-02",
          "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
          "category": "Museum",
          "place": "Field",
          "capacity": 82000,
          "assistance": 65892,
          "price": 15
      },
      {
          _id: 4,
          "image": "http://laguiadeparis.com/wp-content/uploads/2018/11/museo-louvre-paris.jpg",
          "name": "Parisian Museum",
          "date": "2022-11-02",
          "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
          "category": "Museum",
          "place": "Paris",
          "capacity": 8200,
          "estimate": 8200,
          "price": 3500
      },
      {
          _id: 5,
          "image": "https://imagenes.elpais.com/resizer/dZdwwVWb4bjr03EOgrc9sm3lEcY=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/ZQ26H3ZZ5LSKAKO6MX2TEGOTP4.jpg",
          "name": "Comicon",
          "date": "2021-02-12",
          "description": "For comic lovers, all your favourite characters gathered in one place.",
          "category": "Costume Party",
          "place": "Room C",
          "capacity": 120000,
          "assistance": 110000,
          "price": 54
      },
      {
          _id: 6,
          "image": "https://imagenes.elpais.com/resizer/dLm_ezIpPT4slAeZdK5tPtQ07tQ=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4BVPHDF5HNF53L2GS43XW6H4G4.png",
          "name": "Halloween Night",
          "date": "2022-02-12",
          "description": "Come with your scariest costume and win incredible prizes.",
          "category": "Costume Party",

          "place": "Room C",
          "capacity": 12000,
          "estimate": 9000,
          "price": 12
      },
      {
          _id: 7,
          "image": "https://fmaspen.com/wp-content/uploads/2020/11/metallica-gira-argentina-2020.jpg",
          "name": "Metallica in concert",
          "date": "2022-01-22",
          "description": "The only concert of the most emblematic band in the world.",
          "category": "Music Concert",
          "place": "Room A"
          , "capacity": 138000,
          "estimate": 138000,
          "price": 150
      },
      {
          _id: 8,
          "image": "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/duv5ujbhegumxff7q1df/best-electronic-music-festivals-tomorrowland",
          "name": "Electronic Fest",
          "date": "2021-01-22",
          "description": "The best national and international DJs gathered in one place.",
          "category": "Music Concert",
          "place": "Room A",
          "capacity": 138000,
          "assistance": 110300,
          "price": 250
      },
      {
          _id: 9,
          "image": "https://depor3.com/wp-content/uploads/2021/09/maraton_0.jpg",
          "name": "10K for life",
          "date": "2021-03-01",
          "description": "Come and exercise, improve your health and lifestyle.",
          "category": "Race",
          "place": "Soccer field",
          "capacity": 30000,
          "assistance": 25698,
          "price": 3
      },
      {
          _id: 10,
          "image": "https://masaireweb.com/wp-content/uploads/2022/06/maraton-scaled.jpg",
          "name": "15K NY",
          "date": "2022-03-01",
          "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
          "category": "Race",
          "place": "New York",
          "capacity": 3000000,
          "assistance": 2569800,
          "price": 3
      },
      {
          _id: 11,
          "image": "https://educacion30.b-cdn.net/wp-content/uploads/2020/10/pile-of-books-on-the-table-at-the-library-978x652.jpg",
          "name": "School's book fair",
          "date": "2022-10-15",
          "description": "Bring your unused school book and take the one you need.",
          "category": "Book Exchange",
          "place": "Room D1",
          "capacity": 150000,
          "estimate": 123286,
          "price": 1
      },
      {
          _id: 12,
          "image": "https://media.gq.com.mx/photos/6183facbf62bb6a1f322c75b/master/pass/GettyImages-499781701-libros-de-cocina.jpg",
          "name": "Just for your kitchen",
          "date": "2021-11-09",
          "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
          "category": "Book Exchange",
          "place": "Room D6",
          "capacity": 130000,
          "assistance": 90000,
          "price": 100
      },
      {
          _id: 13,
          "image": "https://static2.abc.es/media/play/2019/05/25/batman-kUdB--620x349@abc.jpeg",
          "name": "Batman",
          "date": "2021-3-11",
          "description": "Come see Batman fight crime in Gotham City.",
          "category": "Cinema",
          "place": "Room D1",
          "capacity": 11000,
          "assistance": 9300,
          "price": 225
      },
      {
          _id: 14,
          "image": "https://i.blogs.es/6bf7a5/sdcc_avengerskangdynasty/1366_2000.jpeg",
          "name": "Avengers",
          "date": "2022-10-15",
          "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
          "category": "Cinema",
          "place": "Room D1",
          "capacity": 9000,
          "estimate": 9000,
          "price": 250
      }
  ]
}

const { createApp } = Vue

  createApp({
    data() {
    return{
      cards:[],
      cardsFiltradas:[],
    /*   urlapp:"https://amazing-events.herokuapp.com/api/events", */
      fechaactual:"",
      id : (new URLSearchParams(location.search)).get("id"),
      tarjeta:"",
      textobuscar:"",
      checkbox:[],
      checkboxFiltrados:[],
      cardsUpcoming:[],
      cardsPast:[],
      filtroUp:[],
      filtroPast:[],
      primerTabla:[],
      segundaTabla:[],
      terceraTabla:[],
      titulo1:localStorage.getItem("titulo",this.titulo1),
    }
  }, 
  created(){
    this.datosApp(data) 
  },
  methods:{
     datosApp(data) {
      this.cards = data.events
      this.fechaactual = data.currentDate
      this.cardsFiltradas = this.cards
      this.cards.forEach((evento) => {
        if (!this.checkbox.includes(evento.category)) {
          this.checkbox.push(evento.category)
        }
      });this.checkbox.sort()
      this.cardsUpcoming= this.cards.filter(fecha => fecha.date > this.fechaactual)
      this.cardsPast= this.cards.filter(fecha => fecha.date < this.fechaactual)
      this.filtroUp= this.cardsUpcoming
      this.filtroPast= this.cardsPast
      this.tarjeta = this.cards.find(item => item._id == this.id) 
      this.eventoConMayorPorcentaje()
      this.eventoConMenorPorcentaje()
      this.capacity()
      this.tablaUpcoming()
      this.tablaPast()
      if(this.titulo1 != './style.css' && this.titulo1 != './style2.css'){
        this.titulo1 = './style.css'
      }
      /* fetch(URL)
        .then(response => response.json()
          .then(data => {
            this.cards = data.events
            this.fechaactual = data.currentDate
            this.cardsFiltradas = this.cards
            this.cards.forEach((evento) => {
              if (!this.checkbox.includes(evento.category)) {
                this.checkbox.push(evento.category)
              }
            });this.checkbox.sort()
            this.cardsUpcoming= this.cards.filter(fecha => fecha.date > this.fechaactual)
            this.cardsPast= this.cards.filter(fecha => fecha.date < this.fechaactual)
            this.filtroUp= this.cardsUpcoming
            this.filtroPast= this.cardsPast
            this.tarjeta = this.cards.find(item => item._id == this.id) 
            this.eventoConMayorPorcentaje()
            this.eventoConMenorPorcentaje()
            this.capacity()
            this.tablaUpcoming()
            this.tablaPast()
          }))
        .catch()
        .finally() */
    },    
     eventoConMayorPorcentaje(){
      let objetosConAsistencia= this.cards.filter((item) =>item.assistance)
      let capacidad = objetosConAsistencia.map(item => parseInt (item.capacity))
      let asistencias= objetosConAsistencia.map(item => parseInt(item.assistance) )
      let porcentaje=[]
      let eventoConMayor=[]
       for(i=0; i < objetosConAsistencia.length; i ++){
        porcentaje.push((asistencias[i]*100)/capacidad[i])    
      } 
      eventoConMayor=objetosConAsistencia.find(item=> (parseInt(item.assistance*100)/ parseInt(item.capacity) )==Math.max(...porcentaje))
      this.primerTabla.push(eventoConMayor)
    }, 
    eventoConMenorPorcentaje(){
      let objetosConAsistencia= this.cards.filter((item) =>item.assistance)
      let capacidad = objetosConAsistencia.map(item => parseInt (item.capacity))
      let asistencias= objetosConAsistencia.map(item => parseInt(item.assistance) )
      let porcentaje=[]
      let eventoConMenor=[]
       for(i=0; i < objetosConAsistencia.length; i ++){
        porcentaje.push((asistencias[i]*100)/capacidad[i])    
      } 
      eventoConMenor=objetosConAsistencia.find(item=> (parseInt(item.assistance*100)/ parseInt(item.capacity) )==Math.min(...porcentaje))
      this.primerTabla.push(eventoConMenor)
    }, 
    capacity () {
      let nums = []
      this.cards.forEach(item=>{ nums.push(item.capacity)});
      let mayorCap= Math.max(...nums);
     
      let paraMostrar= this.cards.find(item =>item.capacity==mayorCap);
         this.primerTabla.push(paraMostrar)
      },
      tablaUpcoming(){   
        for(i=0; i<this.checkbox.length;i++){
          let categoria= this.cards.filter(item => !item.assistance).filter(item => item.category == this.checkbox[i])
          let price = categoria.map(item => item.price).reduce((acc,item) => acc + item, 0)
          let estimate= categoria.map(item => parseInt(item.estimate) ).reduce((acc,item) => acc + item, 0)
          let ingreso = price * estimate
          let capacidad= categoria.map(item => parseInt(item.capacity) ).reduce((acc,item) => acc + item, 0)
          let porcentaje=  Math.round(((estimate * 100) / capacidad)) 
          let objeto={
            check:this.checkbox[i],
            ingr:ingreso,
            porce:porcentaje
          } 
          this.segundaTabla.push(objeto) 
        } 
      } ,
        tablaPast(){   
        for(i=0; i<this.checkbox.length;i++){
          let categoria= this.cards.filter(item => item.assistance).filter(item => item.category == this.checkbox[i])
          let price = categoria.map(item => item.price).reduce((acc,item) => acc + item, 0)
          let assistance= categoria.map(item => parseInt(item.assistance) ).reduce((acc,item) => acc + item, 0)
          let ingreso = price * assistance
          let capacidad= categoria.map(item => parseInt(item.capacity) ).reduce((acc,item) => acc + item, 0)
          let porcentaje=  Math.round(((assistance * 100) / capacidad)) 
          let objeto={
            check:this.checkbox[i],
            ingr:ingreso,
            porce:porcentaje
          } 
          this.terceraTabla.push(objeto)
        } 
      }, 
      cambi(){
        if(this.titulo1=="./style.css"){
          this.titulo1= "./style2.css"
        } else if(this.titulo1 == "./style2.css"){
          this.titulo1 = "./style.css"
        } localStorage.setItem("titulo",this.titulo1)
         
      }    
   },
  computed:{
    filtraPorNombre() {
      let primerFiltro=  this.cardsFiltradas.filter((eventos) => eventos.name.toLowerCase().includes(this.textobuscar.toLowerCase()));
      if(this.checkboxFiltrados.length){
      this.cards = primerFiltro.filter((eventos)=> this.checkboxFiltrados.includes(eventos.category)); }
      else {
        this.cards = primerFiltro
      }
    },  filtraPorNombreU() {
      let primerFiltro =  this.filtroUp.filter((eventos) => eventos.name.toLowerCase().includes(this.textobuscar.toLowerCase()));
      if(this.checkboxFiltrados.length){
      this.cardsUpcoming = primerFiltro.filter((eventos)=> this.checkboxFiltrados.includes(eventos.category)); }
      else {
        this.cardsUpcoming = primerFiltro
      }
    }, filtraPorNombreP() {
      let primerFiltro =  this.filtroPast.filter((eventos) => eventos.name.toLowerCase().includes(this.textobuscar.toLowerCase()));
      if(this.checkboxFiltrados.length){
      this.cardsPast = primerFiltro.filter((eventos)=> this.checkboxFiltrados.includes(eventos.category)); }
      else {
        this.cardsPast = primerFiltro
      }
    } ,

  }
}).mount('#app')