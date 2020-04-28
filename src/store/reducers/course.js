import courseImg from '../../assets/course-javascript.png'

const INITIAL_COURSE = {
    course: "Curso JavaScript",
    courseImg: courseImg,
    modules:
    [
        {
            sequence: 1,
            name: "Introdução JavaScript",
            total: 10,
            done: 5,
            topics: [
                {id:1, name:"Introdução", done:true},
                {id:2, name:"Configurando ambiente", done:true},
                {id:3, name:"Configurando ambiente", done:true},
                {id:4, name:"Configurando ambiente", done:true},
                {id:5, name:"Configurando ambiente", done:true},
                {id:6, name:"Configurando ambiente", current:true},
                {id:7, name:"Configurando ambiente"},
                {id:8, name:"Configurando ambiente"},
                {id:9, name:"Configurando ambiente"},
                {id:10, name:"Configurando ambiente"},
            ]
        },

        {
            sequence: 2,
            name: "Introdução JavaScript",
            total: 5,
            done: 1,
            topics: [
                {id:1, name:"Introdução", done:true},
                {id:2, name:"Configurando ambiente"},
                {id:3, name:"Configurando ambiente"},
                {id:4, name:"Configurando ambiente"},
                {id:5, name:"Configurando ambiente"},
            ]
        }
    ]
}

/*const INITIAL_COURSE = {
    course: "",
    courseImg: "",
    modules: []
}*/

export default function course(state = INITIAL_COURSE, action) {
    switch (action.type) {
      case 'CHANGE_COURSE_NAME':
        return {
            ...state,
            course: action.name,
            modules: [
                
            ],
        }
        //return INITIAL_COURSE;
  
      default:
        return state;
    }
}