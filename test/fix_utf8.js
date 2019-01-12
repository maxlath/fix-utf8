require('should')
const fixUtf8 = require('../index.js')

var counter = 0
const fixUtf8WithTimer = str => {
  var id = ++counter
  console.time(id)
  const result = fixUtf8(str)
  console.timeEnd(id)
  return result
}

describe('fix-utf8', () => {
  it('should recover uft8 characters', (done) => {
    fixUtf8WithTimer("L'avenir des idÃ©es").should.equal("L'avenir des idées")
    fixUtf8WithTimer("Comment Ã§a tient ?").should.equal("Comment ça tient ?")
    fixUtf8WithTimer("Moi Maru, chat enrobÃƒÂ©").should.equal("Moi Maru, chat enrobé")
    fixUtf8WithTimer("PÃƒÂªche en eau trouble").should.equal("Pêche en eau trouble")
    fixUtf8WithTimer("La gauche est-elle en Ã©tat de mort cÃ©rÃ©brale ?").should.equal("La gauche est-elle en état de mort cérébrale ?")
    fixUtf8WithTimer("De la lutte des classes Ã  la lutte des places").should.equal("De la lutte des classes à la lutte des places")
    done()
  })
})
