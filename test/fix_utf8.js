require('should')
const fixUtf8 = require('../index.js')

describe('fix-utf8', () => {
  it('should recover uft8 characters', (done) => {
    fixUtf8("L'avenir des idÃ©es").should.equal("L'avenir des idées")
    fixUtf8("Comment Ã§a tient ?").should.equal("Comment ça tient ?")
    fixUtf8("Moi Maru, chat enrobÃƒÂ©").should.equal("Moi Maru, chat enrobé")
    fixUtf8("PÃƒÂªche en eau trouble").should.equal("Pêche en eau trouble")
    fixUtf8("La gauche est-elle en Ã©tat de mort cÃ©rÃ©brale ?").should.equal("La gauche est-elle en état de mort cérébrale ?")
    fixUtf8("De la lutte des classes Ã  la lutte des places").should.equal("De la lutte des classes à la lutte des places")
    done()
  })
})
