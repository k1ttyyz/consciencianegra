import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';


export default function Home() {
  return (
<div className={styles.cor}>
    <div className={styles.container}>
        <div className={styles.item}>

          <h1 className={styles.title}>Dia da consciência negra</h1>

          <p className={styles.desc}>
          Celebrando a cultura, história e luta pela igualdade racial.
          </p>

          <p className={styles.by}>
          Trabalho elaborado por Pablo Leonardo Cosim Andrade</p>
          <p className={styles.de}>6º semestre de Informática, utilizando next.js.</p>

          
        
        </div>
   
<hr></hr>







<img src="./././ar.jpg" className={styles.imgg}></img>

<div className={styles.sss}>
        <h2 className={styles.ba}>Biografia de Carolina Maria de Jesus</h2>
        <img src="./././ca.jpg" className={styles.imgh}></img>
        <h5>Carolina Maria de Jesus (1914-1977) foi uma escritora brasileira, considerada uma das primeiras e mais destacadas escritoras negras do País.

Ela é autora do livro best seller autobiográfico “Quarto de Despejo: Diário de uma Favelada”.</h5>

<h2 className={styles.or}>A origem de Carolina</h2>
<h5>Carolina Maria de Jesus nasceu em Sacramento, no interior de Minas Gerais, no dia 14 de março de 1914. Neta de escravos e filha de uma lavadeira analfabeta, Carolina cresceu em uma família com mais sete irmãos.

A jovem recebeu o incentivo e a ajuda de Maria Leite Monteiro de Barros – uma das freguesas de sua mãe, para frequentar a escola. Com sete anos, ingressou no colégio Alan Kardec, onde cursou a primeira e a segunda série do ensino fundamental.

Apesar de pouco tempo na escola, Carolina logo desenvolveu o gosto pela leitura e pela escrita.

Em 1924, em busca de oportunidades, sua família mudou-se para Lageado, onde trabalhavam como lavradores em uma fazenda. Em 1927, retornaram para Sacramento.</h5>
<h2 className={styles.ii}>A publicação de “Quarto de Despejo: Diário de uma Favelada”</h2>
<h5>No dia 19 de maio de 1958, Audálio publicou parte do texto, que recebeu vários elogios. Em 1959, a revista O Cruzeiro também publicou alguns trechos do diário.

Somente em 1960, foi finalmente publicado o livro autobiográfico “Quarto de Despejo: Diário de uma Favelada”, com edição de Audálio Dantas.


Com uma tiragem de dez mil exemplares, só durante a noite de autógrafos foram vendidos 600 livros.</h5>
</div>
      </div>
    </div>

  )
}