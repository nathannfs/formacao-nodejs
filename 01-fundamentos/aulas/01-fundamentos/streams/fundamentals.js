/*
Exemplos de Writable Streams: Netflix & Spotify

conseguir obter pequenas partes de algo e já conseguir trabalhar com esses dados, mesmo antes de ler os dados por completo

Importação de clientes via CSV (Excel)
1gb - 1.000.000
POST /upload import.csv

Readable Streams / Writable Streams

Buffer -> transicionar informações entre streams
*/

import { Readable, Transform, Writable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        // fornecer informações para quem tiver consumindo ela
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())