import { Metadata } from 'next'

// Metadados da página (substitui a tag <title> do HTML)
export const metadata: Metadata = {
  title: 'Perfil Profissional - José Kayque',
  description: 'Portfólio de José Kayque Lopes, estudante de TI na UFERSA',
}

export default function Page() {
  return (
    <main className="bg-github-bg text-github-text font-sans min-h-screen leading-relaxed">
      {/* Onda superior decorativa */}
      <img 
        className="w-full block" 
        src="https://capsule-render.vercel.app/api?type=waving&height=120&color=001f3d&textBg=false&fontColor=00A9FF&fontSize=64&section=header&reversal=false" 
        alt="Decoração de onda azul superior" 
      />

      <div className="max-w-[900px] mx-auto p-5">
        <header className="text-center mb-10">
          <img 
            className="my-5 mx-auto max-w-full"
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&color=FFFFFF&random=false&width=600&lines=Ol%C3%A1%2C+eu+sou+Jos%C3%A9+Kayque+%F0%9F%A4%96+%F0%9F%91%8B"
            alt="Animação de texto digitando saudação"
          />
        </header>

        {/* Introdução e Cubo Mágico */}
        <section className="bg-github-card rounded-xl p-8 mb-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 border border-github-border">
          <div className="flex-[2] text-left">
            <h1 className="text-github-accent text-3xl font-bold mb-5 text-center md:text-left">
              Olá, sou Kayque Lopes, estudante de tecnologia 👋
            </h1>
            <ul className="list-none p-0 space-y-2.5 text-lg">
              <li>🌱 Estudante de Tecnologia da Informação</li>
              <li>🤖 Acadêmico na UFERSA - Semestre 2026.1</li>
              <li>🧠 Futuro Engenheiro de Software</li>
              <li>💻 Apaixonado por tecnologia</li>
              <li>⚔️ Desejo criar jogos e escrever livros no futuro</li>
              <li>🏹 Gosto muito de desenhar e escutar música 🎶</li>
              <li>📺 Adoro assistir animes e ler mangás no meu tempo livre.</li>
            </ul>
          </div>
          <img 
            src="/cubo.png" 
            alt="Ilustração de um Cubo Mágico" 
            className="flex-1 max-w-[250px] h-auto drop-shadow-[0_0_15_rgba(88,166,255,0.3)]" 
          />
        </section>

        {/* Resumo */}
        <section className="bg-github-card rounded-xl p-8 mb-8 shadow-lg border border-github-border">
          <h2 className="text-github-accent text-center text-2xl font-semibold mb-5">💡 Sobre Mim</h2>
          <p className="mb-4">
            Meu objetivo é desenvolver projetos de alta qualidade, aprimorando meus conhecimentos em tecnologia, sempre em busca de excelência e inovação. Aplico criatividade na resolução de problemas, mantendo uma abordagem disciplinada e eficiente na gestão do tempo.
          </p>
          <p>Este perfil é uma caixa de surpresas onde a magia da tecnologia da informação acontece em cada linha de código escrita.</p>
        </section>

        {/* Soft Skills */}
        <section className="bg-github-card rounded-xl p-8 mb-8 shadow-lg border border-github-border">
          <h2 className="text-github-accent text-center text-2xl font-semibold mb-5">Soft Skills</h2>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-5">
            {[
              { icon: '🧩', title: 'Resolução de Problemas', desc: 'Foco em lógica e análise para soluções eficientes.' },
              { icon: '👥', title: 'Trabalho em Equipe', desc: 'Colaboração ativa em projetos acadêmicos e técnicos.' },
              { icon: '🎨', title: 'Criatividade', desc: 'Design original e estruturação de novos sistemas.' },
              { icon: '📢', title: 'Comunicação', desc: 'Sintetização clara de ideias técnicas e apresentações.' }
            ].map((skill, index) => (
              <div key={index} className="bg-github-inner border border-github-border rounded-lg p-5 w-[200px] text-center transition-all duration-300 hover:-translate-y-2 hover:border-github-accent">
                <span className="text-3xl block mb-2.5">{skill.icon}</span>
                <h3 className="text-github-accent text-lg font-medium mb-2.5">{skill.title}</h3>
                <p className="text-sm text-github-subtext">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Estatísticas Dinâmicas */}
        <section className="bg-github-card rounded-xl p-8 mb-8 shadow-lg border border-github-border">
          <h2 className="text-github-accent text-center text-2xl font-semibold mb-5">📊 Estatísticas do GitHub</h2>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-5">
            <img className="max-w-full h-auto rounded-lg" src="https://github-readme-stats.vercel.app/api?username=KayqueLopes99&show_icons=true&bg_color=000000&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff&hide_border=true" alt="Estatísticas gerais do GitHub" />
            <img className="max-w-full h-auto rounded-lg" src="https://github-readme-stats.vercel.app/api/top-langs/?username=KayqueLopes99&layout=compact&langs_count=8&bg_color=000000&title_color=58a6ff&text_color=c9d1d9&hide_border=true" alt="Linguagens de programação mais utilizadas" />
            <img className="max-w-full h-auto rounded-lg" src="https://github-readme-streak-stats.herokuapp.com/?user=KayqueLopes99&theme=transparent&background=000000&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff&hide_border=true" alt="Sequência de contribuições diárias" />
          </div>
        </section>

        {/* Hard Skills */}
        <section className="bg-github-card rounded-xl p-8 mb-8 shadow-lg border border-github-border">
          <h2 className="text-github-accent text-center text-2xl font-semibold mb-5">💻 Habilidades e Tecnologias</h2>
          
          <h3 className="text-github-accent text-center text-xl font-medium mb-5">Linguagens e Frameworks</h3>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-5 mb-8">
            <img className="h-[50px] transition-transform hover:scale-110" alt="Java" src="https://skillicons.dev/icons?i=java,spring,py,js,html,css,cpp,go" />
          </div>

          <h3 className="text-github-accent text-center text-xl font-medium mb-5">Banco de Dados e Análise</h3>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-5 mb-8">
            <img className="h-[50px] transition-transform hover:scale-110" alt="Bancos de dados" src="https://skillicons.dev/icons?i=mysql,postgres,mongodb,sqlite" />
          </div>

          <h3 className="text-github-accent text-center text-xl font-medium mb-5">Ferramentas</h3>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-5">
            <img className="h-[50px] transition-transform hover:scale-110" alt="Ferramentas de dev" src="https://skillicons.dev/icons?i=git,github,vscode,figma,docker" />
          </div>
        </section>

        {/* Contatos */}
        <section className="bg-github-card rounded-xl p-8 mb-8 shadow-lg border border-github-border">
          <h2 className="text-github-accent text-center text-2xl font-semibold mb-5">🌐 Contatos</h2>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-5">
            <a href="https://github.com/KayqueLopes99" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Link para perfil no GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/josé-kayque-lima-lopes-66b357291" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Link para perfil no LinkedIn" />
            </a>
          </div>
        </section>
      </div>

      {/* Rodapé - Correção do srcSet aplicada abaixo */}
      <footer className="text-center pb-10">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcSet="https://raw.githubusercontent.com/mari4souza/mari4souza/output/github-contribution-grid-snake-dark.svg" 
          />
          <img 
            className="max-w-full mx-auto" 
            alt="Animação da cobrinha de contribuições" 
            src="https://raw.githubusercontent.com/mari4souza/mari4souza/output/github-contribution-grid-snake.svg" 
          />
        </picture>
        <img 
          className="w-full block" 
          src="https://capsule-render.vercel.app/api?type=waving&height=120&color=001f3d&textBg=false&fontColor=00A9FF&fontSize=64&section=footer&reversal=false" 
          alt="Decoração de onda azul inferior" 
        />
      </footer>
    </main>
  )
}