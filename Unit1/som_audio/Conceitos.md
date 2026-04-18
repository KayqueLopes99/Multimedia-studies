## Áudio e as propriedades físicas do som

Antes de existir computador, código ou fone de ouvido, o som é pura **física**. O som é uma onda mecânica (uma variação de pressão) que viaja através de um meio (como o ar, a água ou uma parede). 

Imagine que você bate palmas. Essa batida empurra as moléculas de ar umas contra as outras, criando uma "onda de choque" invisível. Quando essa onda bate no seu tímpano, seu cérebro interpreta isso como "som".

Para mapear isso matematicamente, usamos três propriedades principais:

* **Frequência (Tom):** É a velocidade da onda. Quantos ciclos completos a onda faz em um segundo? Se ela vibrar 440 vezes por segundo, dizemos que a frequência é de 440 Hertz (Hz) — que é a nota Lá (A) padrão na música.
    * *Ondas lentas (baixa frequência):* Sons graves (ex: bumbo de bateria, trovão).
    * *Ondas rápidas (alta frequência):* Sons agudos (ex: apito, prato da bateria).
    * *O limite humano:* Nós escutamos de 20 Hz até cerca de 20.000 Hz.
* **Amplitude (Volume):** É o tamanho da onda, a força com que as moléculas foram empurradas. Quanto maior a "altura" da onda, mais alto é o volume. Medimos isso em Decibéis (dB).
* **Timbre (Forma da onda):** É o que dá a "identidade" ao som. Um piano e um violão tocando a exata mesma nota (mesma frequência) no mesmo volume (mesma amplitude) soam diferentes porque a *forma* geométrica da onda de cada instrumento é única, cheia de harmônicos diferentes.

### 2. Representação Digital (O Desafio da Computação)

Aqui entra o problema de software: o som real é **Analógico** (uma curva contínua e infinita). Mas o computador é **Digital** (só entende números discretos, 0s e 1s). 

Como colocamos uma curva infinita dentro de uma matriz finita de memória? Nós usamos um processo chamado **PCM (Pulse-Code Modulation)**, que consiste em tirar várias "fotos" da onda ao longo do tempo e anotar a altura dela. É como transformar uma rampa lisa em uma escada.

Esse processo tem dois eixos críticos que você precisa configurar sempre que for exportar ou processar um áudio:

**A. Taxa de Amostragem (*Sample Rate* - Eixo X/Tempo)**
* É a quantidade de "fotos" (amostras) que o computador tira da onda por segundo.
* Pense em um vídeo: se ele tiver poucos quadros por segundo (FPS), a imagem fica travando. No áudio, se a taxa for baixa, você perde as frequências agudas e o som fica abafado (tipo voz de telefone antigo).
* *Padrão da indústria:* O padrão de um CD e do Spotify é **44.100 Hz (44.1 kHz)**. Ou seja, em 1 segundo de música, o computador salvou 44.100 valores numéricos. 

**B. Profundidade de Bits (*Bit Depth* ou Quantização - Eixo Y/Amplitude)**
* Quando o computador tira a "foto" da onda, ele precisa arredondar a altura dela para o número mais próximo disponível na "régua" de medição.
* A profundidade de bits diz quantos "degraus" (valores) essa régua tem. 
* Se você usar **8 bits**, você tem apenas 256 níveis de volume (degraus grandes, arredondamento ruim, som com chiado). O padrão moderno é **16 bits**, que oferece 65.536 níveis de volume (degraus microscópicos, som cristalino).

Para você ver como essa "tradução" do mundo analógico para o digital funciona, construí este visualizador abaixo. Brinque com a amostragem e os bits para ver como uma onda suave se transforma em blocos e gera o que chamamos de "erro de quantização":
