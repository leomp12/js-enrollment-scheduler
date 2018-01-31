'use strict'

let alunos = [
  {
    'disciplina': 'Angiologia',
    'alunos': {
      'Melissa Oliveira': '',
      'Carolina Milan': '',
      'Lidia Assis': '',
      'Maria Clara Gontijo': '',
      'Lais Pascoal': '',
      'Vanessa Souza': '',
      'Lyvia Dias': '',
      'Rui Guilherme': '',
      'Isabela Braun': '',
      'Ana Cristina Lobato': '',
      'Raissa Teixeira': '',
      'Joao Guilherme': '',
      'Debora Teixeira': '',
      'Natana Nadejje': '',
      'Ludmila Almeida': '',
      'Patricia Pedra': ''
    }
  },
  {
    'disciplina': 'Gastro',
    'alunos': {
      'Melissa Oliveira': '',
      'Carolina Milan': '',
      'Junia Andrade': '',
      'Andre Ribeiro': '',
      'Wagner Mendes': '',
      'Thais Vianney': '',
      'Julia Wanderley': '',
      'Julia Gomes': '',
      'Maria Clara Chaves': '',
      'Clara Castro': '',
      'Lyvia Dias': '',
      'Thulio Magalhaes': '',
      'Guilherme Lemos': '',
      'Vinicius Viana': '',
      'Mariana Couto': '',
      'Luciana Penna': ''
    }
  },
  {
    'disciplina': 'Geriatria',
    'alunos': {
      'Ludmila Almeida': '',
      'Gabriela Abreu': 'C',
      'Lidia Assis': '',
      'Mariana Lis': '',
      'Kamilla Emerencio': '',
      'Maria Clara Gontijo': '',
      'Matheus Franca': '',
      'Laura Alvares': '',
      'Lais Pascoal': '',
      'Bruna Almeida': '',
      'Wagner Mendes': '',
      'Lucas Campos': '',
      'Julia Wanderley': '',
      'Isadora Estevam': '',
      'Julia Gomes': '',
      'Vanessa Souza': '',
      'Maria Clara Chaves': '',
      'Clara Castro': '',
      'Lyvia Dias': '',
      'Thulio Magalhaes': '',
      'Guilherme Lemos': '',
      'Vinicius Viana': '',
      'Mariana Couto': '',
      'Luisa Valerio': '',
      'Rui Guilherme': '',
      'Leonardo Tavares': 'C',
      'Luane Vargas': 'C',
      'Criskelem Reis': '',
      'Ana Cristina Lobato': '',
      'Camila Magalhaes': '',
      'Raissa Teixeira': '',
      'Patricia Pedra': '',
      'Joao Guilherme': '',
      'Debora Teixeira': '',
      'Natana Nadejje': '',
      'Melissa Oliveira': '',
      'Bruna Moreira': '',
      'Isabela Braun': '',
      'Junia Andrade': ''
    }
  },
  {
    'disciplina': 'Ortopedia',
    'alunos': {
      'Rui Guilherme': '',
      'Mariana Lis': '',
      'Kamilla Emerencio': '',
      'Andre Ribeiro': '',
      'Alessandra de Siqueira': '',
      'Thais Vianney': '',
      'Luciana Penna': '',
      'Maria Clara Chaves': '',
      'Thulio Magalhaes': '',
      'Lauro Silva': '',
      'Isabela Braun': '',
      'Matheus Franca': '',
      'Luane Vargas': '',
      'Camila Magalhaes': '',
      'Raissa Teixeira': '',
      'Bruna Almeida': ''
    }
  },
  {
    'disciplina': 'Otorrino',
    'alunos': {
      'Luciana Penna': '',
      'Gabriela Abreu': '',
      'Kamilla Emerencio': '',
      'Matheus Franca': '',
      'Lucas Campos': '',
      'Isadora Estevam': '',
      'Lauro Silva': '',
      'Leonardo Tavares': '',
      'Luane Vargas': '',
      'Bruna Moreira': '',
      'Criskelem Reis': '',
      'Ana Cristina Lobato': 'A',
      'Camila Magalhaes': '',
      'Patricia Pedra': '',
      'Debora Teixeira': '',
      'Natana Nadejje': ''
    }
  },
  {
    'disciplina': 'Urologia',
    'alunos': {
      'Junia Andrade': '',
      'Maria Clara Gontijo': '',
      'Laura Alvares': 'A',
      'Andre Ribeiro': '',
      'Lais Pascoal': '',
      'Alessandra de Siqueira': '',
      'Lucas Campos': '',
      'Julia Gomes': '',
      'Vanessa Souza': '',
      'Clara Castro': '',
      'Guilherme Lemos': '',
      'Vinicius Viana': '',
      'Mariana Couto': '',
      'Lauro Silva': '',
      'Luisa Valerio': '',
      'Joao Guilherme': ''
    }
  },
  {
    'disciplina': 'Reumato',
    'alunos': {
      'Isadora Estevam': '',
      'Ludmila Almeida': '',
      'Carolina Milan': '',
      'Gabriela Abreu': 'B',
      'Lidia Assis': '',
      'Mariana Lis': '',
      'Laura Alvares': '',
      'Alessandra de Siqueira': '',
      'Bruna Almeida': '',
      'Wagner Mendes': '',
      'Thais Vianney': '',
      'Julia Wanderley': '',
      'Luisa Valerio': '',
      'Leonardo Tavares': 'B',
      'Bruna Moreira': '',
      'Criskelem Reis': ''
    }
  },
  {
    'disciplina': 'Ginecologia',
    'alunos': {
      'Guilherme Lemos': '',
      'Julia Wanderley': '',
      'Laura Alvares': '',
      'Leonardo Tavares': '',
      'Criskelem Reis': '',
      'Luisa Valerio': '',
      'Vinicius Viana': '',
      'Lyvia Dias': '',
      'Kamilla Emerencio': '',
      'Wagner Mendes': '',
      'Lais Pascoal': '',
      'Maria Clara Gontijo': '',
      'Bruna Almeida': '',
      'Camila Magalhaes': '',
      'Natana Nadejje': '',
      'Raissa Teixeira': '',
      'Clara Castro': '',
      'Julia Gomes': '',
      'Debora Teixeira': '',
      'Luciana Penna': 'G',
      'Isadora Estevam': '',
      'Lauro Silva': '',
      'Andre Ribeiro': '',
      'Mariana Couto': '',
      'Thais Vianney': '',
      'Isabela Braun': '',
      'Melissa Oliveira': '',
      'Junia Andrade': '',
      'Luane Vargas': '',
      'Lucas Campos': '',
      'Vanessa Souza': '',
      'Bruna Moreira': '',
      'Mariana Lis': '',
      'Matheus Franca': '',
      'Patricia Pedra': '',
      'Rui Guilherme': '',
      'Maria Clara Chaves': '',
      'Thulio Magalhaes': '',
      'Joao Guilherme': '',
      'Alessandra de Siqueira': '',
      'Gabriela Abreu': 'G',
      'Carolina Milan': '',
      'Ludmila Almeida': '',
      'Lidia Assis': '',
      'Ana Cristina Lobato': ''
    }
  },
  {
    'disciplina': 'Pediatria',
    'alunos': {
      'Guilherme Lemos': '',
      'Julia Wanderley': '',
      'Laura Alvares': '',
      'Leonardo Tavares': '',
      'Criskelem Reis': '',
      'Luisa Valerio': '',
      'Vinicius Viana': '',
      'Lyvia Dias': '',
      'Kamilla Emerencio': '',
      'Wagner Mendes': '',
      'Lais Pascoal': '',
      'Maria Clara Gontijo': '',
      'Bruna Almeida': '',
      'Camila Magalhaes': '',
      'Natana Nadejje': '',
      'Raissa Teixeira': '',
      'Clara Castro': '',
      'Julia Gomes': '',
      'Debora Teixeira': '',
      'Luciana Penna': 'E',
      'Isadora Estevam': '',
      'Lauro Silva': '',
      'Andre Ribeiro': '',
      'Mariana Couto': '',
      'Thais Vianney': '',
      'Isabela Braun': '',
      'Melissa Oliveira': '',
      'Junia Andrade': '',
      'Luane Vargas': 'B',
      'Lucas Campos': '',
      'Vanessa Souza': '',
      'Bruna Moreira': '',
      'Mariana Lis': '',
      'Matheus Franca': '',
      'Patricia Pedra': '',
      'Rui Guilherme': '',
      'Maria Clara Chaves': '',
      'Thulio Magalhaes': '',
      'Joao Guilherme': '',
      'Alessandra de Siqueira': '',
      'Gabriela Abreu': '',
      'Carolina Milan': '',
      'Ludmila Almeida': '',
      'Lidia Assis': '',
      'Ana Cristina Lobato': ''
    }
  },
  {
    'disciplina': 'Clinica',
    'alunos': {
      'Guilherme Lemos': '',
      'Julia Wanderley': '',
      'Laura Alvares': '',
      'Leonardo Tavares': '',
      'Criskelem Reis': '',
      'Luisa Valerio': '',
      'Vinicius Viana': '',
      'Lyvia Dias': '',
      'Kamilla Emerencio': '',
      'Wagner Mendes': '',
      'Lais Pascoal': '',
      'Maria Clara Gontijo': '',
      'Bruna Almeida': '',
      'Camila Magalhaes': '',
      'Natana Nadejje': '',
      'Raissa Teixeira': '',
      'Clara Castro': '',
      'Julia Gomes': '',
      'Debora Teixeira': '',
      'Luciana Penna': '',
      'Isadora Estevam': '',
      'Lauro Silva': '',
      'Andre Ribeiro': '',
      'Mariana Couto': '',
      'Thais Vianney': '',
      'Isabela Braun': '',
      'Melissa Oliveira': '',
      'Junia Andrade': '',
      'Luane Vargas': 'B',
      'Lucas Campos': '',
      'Vanessa Souza': '',
      'Bruna Moreira': '',
      'Mariana Lis': '',
      'Matheus Franca': '',
      'Patricia Pedra': '',
      'Rui Guilherme': '',
      'Maria Clara Chaves': '',
      'Thulio Magalhaes': '',
      'Joao Guilherme': '',
      'Alessandra de Siqueira': '',
      'Gabriela Abreu': '',
      'Carolina Milan': '',
      'Ludmila Almeida': '',
      'Lidia Assis': '',
      'Ana Cristina Lobato': ''
    }
  }
]

let disciplinas = [
  {
    'disciplina': 'Angiologia',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'A',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Angiologia',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'B',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Gastro',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'A',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Gastro',
    'dia': 'terca',
    'inicio': '16:45',
    'fim': '19:30',
    'local': '1',
    'turma': 'B',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'A',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'sexta',
    'inicio': '10:25',
    'fim': '13:10',
    'local': '1',
    'turma': 'B',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'segunda',
    'inicio': '09:35',
    'fim': '12:05',
    'local': '1',
    'turma': 'C',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'segunda',
    'inicio': '09:35',
    'fim': '12:05',
    'local': '1',
    'turma': 'D',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'sexta',
    'inicio': '10:25',
    'fim': '13:10',
    'local': '1',
    'turma': 'E',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Ortopedia',
    'dia': 'segunda',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'A',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Ortopedia',
    'dia': 'segunda',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'B',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Otorrino',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'A',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Otorrino',
    'dia': 'sexta',
    'inicio': '15:55',
    'fim': '18:40',
    'local': '1',
    'turma': 'B',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Urologia',
    'dia': 'segunda',
    'inicio': '09:35',
    'fim': '12:05',
    'local': '1',
    'turma': 'A',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Urologia',
    'dia': 'segunda',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'B',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Reumato',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'A',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Reumato',
    'dia': 'quarta',
    'inicio': '16:45',
    'fim': '19:30',
    'local': '1',
    'turma': 'B',
    'min': 8,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'A',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'B',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '16:45',
    'local': '2',
    'turma': 'C',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'D',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'E',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '16:45',
    'local': '2',
    'turma': 'F',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '16:45',
    'local': '2',
    'turma': 'G',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'H',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'I',
    'min': 5,
    'max': 5,
    'num': 0
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '17:35',
    'local': '3',
    'turma': 'A',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'B',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'C',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'D',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'E',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'F',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Clinica',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'A',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Clinica',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '17:35',
    'local': '4',
    'turma': 'B',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Clinica',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'C',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Clinica',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'D',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Clinica',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '17:35',
    'local': '4',
    'turma': 'E',
    'min': 7,
    'max': 8,
    'num': 0
  },
  {
    'disciplina': 'Clinica',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'F',
    'min': 7,
    'max': 8,
    'num': 0
  }
]

let locais = [
  {
    'de': '1',
    'para': '2',
    'minutos': 50
  },
  {
    'de': '1',
    'para': '3',
    'minutos': 50
  },
  {
    'de': '1',
    'para': '4',
    'minutos': 50
  },
  {
    'de': '2',
    'para': '1',
    'minutos': 50
  },
  {
    'de': '2',
    'para': '3',
    'minutos': 50
  },
  {
    'de': '2',
    'para': '4',
    'minutos': 50
  },
  {
    'de': '3',
    'para': '1',
    'minutos': 50
  },
  {
    'de': '3',
    'para': '2',
    'minutos': 50
  },
  {
    'de': '3',
    'para': '4',
    'minutos': 50
  },
  {
    'de': '4',
    'para': '1',
    'minutos': 50
  },
  {
    'de': '4',
    'para': '2',
    'minutos': 50
  },
  {
    'de': '4',
    'para': '3',
    'minutos': 50
  }
]

let horarios = []

// converte strings de horarios em minutos
for (let i = 0; i < disciplinas.length; i++) {
  let disciplina = disciplinas[i]
  let x = [ 'inicio', 'fim' ]
  for (let i = 0; i < x.length; i++) {
    let s = disciplina[x[i]]
    s = s.split(':')
    let horas = parseInt(s[0])
    let minutos = parseInt(s[1])
    // salva por referencia
    disciplina['n_' + x[i]] = horas * 60 + minutos
  }
}

let adiciona = function (nome, disciplina, preferencia) {
  // adiciona horario
  let el
  for (let i = 0; i < horarios.length; i++) {
    if (horarios[i].nome === nome) {
      el = i
      break
    }
  }
  if (el === undefined) {
    el = horarios.length
    horarios.push({
      'nome': nome,
      'horarios': []
    })
  }

  let obj = Object.assign({
    'bateu': 0,
    'troca': false,
    'pre': preferencia
  }, disciplina)
  delete obj.num
  delete obj.min
  delete obj.max
  horarios[el].horarios.push(obj)

  disciplina.num++
}

// joga alunos nas disciplinas
for (let i = 0; i < alunos.length; i++) {
  let aluno = alunos[i]
  let turmas = []

  // separa todas as turmas da disciplina
  for (let i = 0; i < disciplinas.length; i++) {
    let disciplina = disciplinas[i]
    if (aluno.disciplina === disciplina.disciplina) {
      turmas.push(i)
    }
  }

  if (turmas.length === 0) {
    throw new Error('disciplina invalida ' + aluno.disciplina)
  } else {
    // preferencias primeiro
    for (let nome in aluno.alunos) {
      let turma = aluno.alunos[nome]
      if (turma !== '') {
        // buscar turma selecionada
        let achei = false

        for (let i = 0; i < turmas.length; i++) {
          let disciplina = disciplinas[turmas[i]]
          if (turma === disciplina.turma) {
            adiciona(nome, disciplina, true)

            achei = true
            break
          }
        }

        if (!achei) {
          throw new Error('turma invalida ' + turma + ', aluno ' + nome)
        }
      }
    }

    // outros alunos
    for (let nome in aluno.alunos) {
      let turma = aluno.alunos[nome]
      if (turma === '') {
        for (let i = 0; i < turmas.length; i++) {
          let disciplina = disciplinas[turmas[i]]
          if (disciplina.num < disciplina.min) {
            adiciona(nome, disciplina, false)
            break
          } else if (disciplina.num < disciplina.max) {
            // checa se alguma turma esta vazia
            let achei = false

            for (let i = 0; i < turmas.length; i++) {
              let disciplina = disciplinas[turmas[i]]
              if (disciplina.num < disciplina.min) {
                adiciona(nome, disciplina, false)
                achei = true
                break
              }
            }

            if (!achei) {
              adiciona(nome, disciplina, false)
            }
            break
          }
        }
      }
    }
  }
}
// console.log(disciplinas)

function bater (horario, i) {
  let batidas = 0

  for (let j = 0; j < horario.length; j++) {
    if (i === j) {
      // mesmo horario
      // pula
      continue
    }

    let bateu = false
    // testa dia e hora
    if (horario[i].dia === horario[j].dia) {
      // mesmo dia
      // checa horario
      let de
      let para

      if (horario[i].n_inicio === horario[j].n_inicio || horario[i].n_fim === horario[j].n_fim) {
        // mesmo horario
        bateu = true
      } else {
        if (horario[i].n_inicio > horario[j].n_inicio) {
          if (horario[j].n_fim > horario[i].n_inicio) {
            // bate horario
            bateu = true
          } else {
            de = j
            para = i
          }
        } else {
          // j comeca depois de i
          if (horario[i].n_fim > horario[j].n_inicio) {
            // bate horario
            bateu = true
          } else {
            de = i
            para = j
          }
        }
      }

      if (!bateu) {
        // nao bateu horario
        // checa margem para transporte
        if (horario[de].local !== horario[para].local) {
          let achei = false
          for (let i = 0; i < locais.length; i++) {
            let local = locais[i]
            if (local.de === horario[de].local && local.para === horario[para].local) {
              if (horario[de].n_fim + local.minutos > horario[para].n_inicio) {
                // bate horario
                bateu = true
              }
              achei = true
              break
            }
          }

          if (!achei) {
            // bate horario
            bateu = true
          }
        }
      }
    }

    if (bateu) {
      // console.log('bateu ' + nome + ' ' + i + ' ' + j)
      if (!horario[i].pre) {
        horario[i].bateu++
      }
      /*
      if (!horario[j].pre) {
        horario[j].bateu++
      }
      */
      batidas++
    }
  }

  return batidas
}

let n = 0
let batidas = 10000
let antes
let parado = 0
let piorando = 0
let melhor = {}
let menor = batidas
do {
  n++
  console.log(1)
  antes = batidas
  batidas = 0

  // checa horarions batendo
  // reset
  for (let i = 0; i < horarios.length; i++) {
    let horario = horarios[i].horarios
    for (let i = 0; i < horario.length; i++) {
      // console.log('i')
      horario[i].troca = false
      horario[i].bateu = 0
    }
  }

  for (let i = 0; i < horarios.length; i++) {
    let horario = horarios[i].horarios

    for (let i = 0; i < horario.length; i++) {
      batidas += bater(horario, i)
    }
  }

  if (antes < batidas) {
    // desfaz
    piorando++
    if (piorando > 1) {
      // console.log(3)
      horarios = melhor
      piorando = 0
      continue
    }
  } else {
    if (menor > batidas) {
      menor = batidas
    }
    melhor = Object.assign([], horarios)
  }

  // console.log(batidas)
  if (batidas === 0) {
    console.log('FIM')
    log()
    break
  } else if (batidas > 300) {
    console.log('RUIM')
    log()
    break
  }

  for (let i = 0; i < horarios.length; i++) {
    let horario = horarios[i].horarios

    let troca
    for (let i = 0; i < horario.length; i++) {
      if (troca === undefined) {
        if (horario[i].bateu > 0) {
          troca = i
        }
      } else {
        if (horario[troca].bateu < horario[i].bateu) {
          troca = i
        }
      }
    }
    if (troca !== undefined) {
      horario[troca].troca = true
    }
  }

  if (n > 20000) {
    console.log('LIMITE')
    log()
    break
  }

  // tenta trocas
  let trocas = 0
  for (let i = 0; i < horarios.length; i++) {
    let horario = horarios[i].horarios

    for (let i = 0; i < horario.length; i++) {
      if (horario[i].troca) {
        let troca = horario
        let j = i

        let trocou = false
        let forcar = false

        do {
          // procura outra turma
          for (let i = 0; i < horarios.length; i++) {
            let horario = horarios[i].horarios

            for (let i = 0; i < horario.length; i++) {
              if (horario[i].troca || (forcar && !horario[i].pre)) {
                if (horario[i].disciplina === troca[j].disciplina) {
                  if (troca[j].turma !== horario[i].turma) {
                    // conta batidas antes da troca para conferir depois
                    let y = bater(horario, i)
                    let batidas = y + bater(troca, j)

                    // inverte
                    let x = Object.assign({}, troca[j])
                    troca[j] = Object.assign({}, horario[i])
                    horario[i] = Object.assign({}, x)

                    // verifica e compara batidas apos troca
                    if (forcar) {
                      if (parado > 5000) {
                        console.log('LOOP INFINITO')
                        log()
                      } else if (parado > 5) {
                        // console.log(2)
                        // forca a troca
                        batidas = 10000
                        parado = 0
                      }
                    }
                    if (batidas < bater(horario, i) + bater(troca, j)) {
                      // desfaz
                      let x = Object.assign({}, troca[j])
                      troca[j] = Object.assign({}, horario[i])
                      horario[i] = Object.assign({}, x)
                    } else {
                      // console.log('trocou')
                      troca[j].troca = false
                      for (let i = 0; i < horario.length; i++) {
                        horario[i].troca = false
                      }
                      trocas++
                      trocou = true
                      break
                    }
                  }
                }
              }
            }

            if (trocou) {
              break
            }
          }

          if (forcar) {
            forcar = false
          } else if (!trocou) {
            forcar = true
          }
        } while (forcar === true)

        break
      }
    }
  }

  if (trocas === 0 || batidas >= antes) {
    parado++
    // inverte ordem de alunos
    for (let i = 0; i < horarios.length; i++) {
      let x = Math.floor(Math.random() * (horarios.length - 1))
      let y = Math.floor(Math.random() * (horarios.length - 1))
      let w = Object.assign({}, horarios[x])
      horarios[x] = Object.assign({}, horarios[y])
      horarios[y] = Object.assign({}, w)
    }
  }
} while (batidas > 0)

function log () {
  for (let i = 0; i < horarios.length; i++) {
    console.log(horarios[i].nome)
    console.log(JSON.stringify(horarios[i].horarios, null, 2))
  }
  console.log(batidas)
  console.log(menor)
}

// console.log(horarios)
