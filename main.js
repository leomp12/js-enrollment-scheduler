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
      'Isadora Estevam': '',
      'Maria Clara Chaves ': '',
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
      'Luane Vargas ': '',
      'Bruna Moreira': '',
      'Criskelem Reis': '',
      'Ana Cristina Lobato': 'A',
      'Camila Magalhaes': '',
      'Patricia Pedra': '',
      'Debora Teixeira': '',
      'Natana Nedejje': ''
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
      'Vanessa Souza ': '',
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
      'Luciana Penna': '',
      'Ludmila Almeida': '',
      'Carolina Milan': '',
      'Gabriela Abreu': 'B',
      'Lidia Assis': '',
      'Mariana Lis': '',
      'Laura Alvares': '',
      'Alessandra de Siqueira': '',
      'Bruna Almeida ': '',
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
      'Isadora Estevam ': '',
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
      'Isadora Estevam ': '',
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
      'Isadora Estevam ': '',
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
    'turma': 'A'
  },
  {
    'disciplina': 'Angiologia',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'B'
  },
  {
    'disciplina': 'Gastro',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'A'
  },
  {
    'disciplina': 'Gastro',
    'dia': 'terca',
    'inicio': '16:45',
    'fim': '19:30',
    'local': '1',
    'turma': 'B'
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'A'
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'sexta',
    'inicio': '10:25',
    'fim': '13:10',
    'local': '1',
    'turma': 'B'
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'segunda',
    'inicio': '09:35',
    'fim': '12:05',
    'local': '1',
    'turma': 'C'
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'segunda',
    'inicio': '09:35',
    'fim': '12:05',
    'local': '1',
    'turma': 'D'
  },
  {
    'disciplina': 'Geriatria',
    'dia': 'sexta',
    'inicio': '10:25',
    'fim': '13:10',
    'local': '1',
    'turma': 'E'
  },
  {
    'disciplina': 'Ortopedia',
    'dia': 'segunda',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'A'
  },
  {
    'disciplina': 'Ortopedia',
    'dia': 'segunda',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'B'
  },
  {
    'disciplina': 'Otorrino',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'A'
  },
  {
    'disciplina': 'Otorrino',
    'dia': 'sexta',
    'inicio': '15:55',
    'fim': '18:40',
    'local': '1',
    'turma': 'B'
  },
  {
    'disciplina': 'Urologia',
    'dia': 'segunda',
    'inicio': '09:35',
    'fim': '12:05',
    'local': '1',
    'turma': 'A'
  },
  {
    'disciplina': 'Urologia',
    'dia': 'segunda',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '1',
    'turma': 'B'
  },
  {
    'disciplina': 'Reumato',
    'dia': 'sexta',
    'inicio': '07:40',
    'fim': '10:25',
    'local': '1',
    'turma': 'A'
  },
  {
    'disciplina': 'Reumato',
    'dia': 'quarta',
    'inicio': '16:45',
    'fim': '19:30',
    'local': '1',
    'turma': 'B'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'A'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'B'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '16:45',
    'local': '2',
    'turma': 'C'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'D'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'E'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '16:45',
    'local': '2',
    'turma': 'F'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '16:45',
    'local': '2',
    'turma': 'G'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'H'
  },
  {
    'disciplina': 'Ginecologia',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '15:55',
    'local': '2',
    'turma': 'I'
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '17:35',
    'local': '3',
    'turma': 'A'
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'B'
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'C'
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'D'
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'E'
  },
  {
    'disciplina': 'Pediatria',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '3',
    'turma': 'F'
  },
  {
    'disciplina': 'Clinica',
    'dia': 'quarta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'A'
  },
  {
    'disciplina': 'Clinica',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '17:35',
    'local': '4',
    'turma': 'B'
  },
  {
    'disciplina': 'Clinica',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'C'
  },
  {
    'disciplina': 'Clinica',
    'dia': 'sexta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'D'
  },
  {
    'disciplina': 'Clinica',
    'dia': 'terca',
    'inicio': '14:00',
    'fim': '17:35',
    'local': '4',
    'turma': 'E'
  },
  {
    'disciplina': 'Clinica',
    'dia': 'quinta',
    'inicio': '13:10',
    'fim': '16:45',
    'local': '4',
    'turma': 'F'
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

let horarios = {}

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
    disciplina[x[i]] = horas * 60 + minutos
  }
}

// joga alunos nas disciplinas
for (let i = 0; i < alunos.length; i++) {
  let aluno = alunos[i]
  let achei = false

  for (let i = 0; i < disciplinas.length; i++) {
    let disciplina = disciplinas[i]
    if (aluno.disciplina === disciplina.disciplina) {
      for (let nome in aluno.alunos) {
        // checa preferencia
        let turma = aluno.alunos[nome]
        if (turma === '' || turma === disciplina.turma) {
          // adiciona horario
          if (!horarios.hasOwnProperty(nome)) {
            horarios[nome] = []
          }
          horarios[nome].push(disciplina)
        } else {
          // buscar turma selecionada
          let achei = false

          for (let i = 0; i < disciplinas.length; i++) {
            let disciplina = disciplinas[i]
            if (aluno.disciplina === disciplina.disciplina && turma === disciplina.turma) {
              // adiciona horario
              if (!horarios.hasOwnProperty(nome)) {
                horarios[nome] = []
              }
              horarios[nome].push(disciplina)

              achei = true
              break
            }
          }

          if (!achei) {
            throw new Error('turma invalida ' + turma + ', aluno ' + nome)
          }
        }
      }

      achei = true
      break
    }
  }

  if (!achei) {
    throw new Error('disciplina invalida ' + aluno.disciplina)
  }
}

// console.log(horarios)
// checa horarions batendo
for (let nome in horarios) {
  if (horarios.hasOwnProperty(nome)) {
    let horario = horarios[nome]
    for (let i = 0; i < horario.length; i++) {
      for (let j = 0; j < horario.length; j++) {
        if (i === j) {
          // mesmo horario
          // pula
          continue
        }

        // testa dia e hora
        if (horario[i].dia === horario[j].dia) {
          // mesmo dia
          // checa horario
          let de
          let para

          if (horario[i].inicio === horario[j].inicio || horario[i].fim === horario[j].fim) {
            // mesmo horario
          } else {
            if (horario[i].inicio > horario[j].inicio) {
              if (horario[j].fim > horario[i].inicio) {
                // bate horario
              } else {
                de = j
                para = i
              }
            } else {
              // j comeca depois de i
              if (horario[i].fim > horario[j].inicio) {
                // bate horario
              } else {
                de = i
                para = j
              }
            }
          }

          // nao bateu horario
          // checa margem para transporte
          if (horario[de].local !== horario[para].local) {
            let achei = false
            for (let i = 0; i < locais.length; i++) {
              let local = locais[i]
              if (local.de === horario[de].local && local.para === horario[para].local) {
                if (horario[de].fim + local.minutos > horario[para].inicio) {
                  // bate horario
                }
                achei = true
                break
              }
            }

            if (!achei) {
              // bate horario
            }
          }
        }
      }
    }
  }
}
