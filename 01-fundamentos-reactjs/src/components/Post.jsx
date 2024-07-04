import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post (){
  return (
    <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar
              src="https://github.com/tiago0214.png" 
            />
            <div className={styles.authorInfo}>
              <strong>Tiago souza</strong>
              <span>Web developer</span>
            </div>
          </div>

          <time 
            title="3 de julho de 2024" 
            dateTime="2024-07-03 08:13:09">
            Publicado há 1h
          </time>
        </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea placeholder="Deixe um comentário!" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}