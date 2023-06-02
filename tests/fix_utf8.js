import test from 'node:test'
import assert from 'node:assert'
import fixUtf8 from '../index.js'

test('it should recover uft8 characters', () => {
  assert.equal(fixUtf8("L'avenir des idÃ©es"), "L'avenir des idées")
  assert.equal(fixUtf8("Comment Ã§a tient ?"), "Comment ça tient ?")
  assert.equal(fixUtf8("Moi Maru, chat enrobÃƒÂ©"), "Moi Maru, chat enrobé")
  assert.equal(fixUtf8("PÃƒÂªche en eau trouble"), "Pêche en eau trouble")
  assert.equal(fixUtf8("La gauche est-elle en Ã©tat de mort cÃ©rÃ©brale ?"), "La gauche est-elle en état de mort cérébrale ?")
  assert.equal(fixUtf8("De la lutte des classes Ã  la lutte des places"), "De la lutte des classes à la lutte des places")
})
