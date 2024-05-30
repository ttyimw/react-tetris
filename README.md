# production
- tetris
  - https://y-i.sakura.ne.jp/react-tetris/
- storybook
  - https://y-i.sakura.ne.jp/react-tetris-storybook/

# overview
- 目的
  - ReactでTetrisの挙動を確認する
    - テトリミノの回転と落下では素早い描画が必要
  - atmicデザインでlogicとviewを分離し、viewをpresentational特化する実験をする

# capture

<img width="388" alt="キャプチャ20240530" src="https://github.com/ttyimw/react-tetris/assets/25152903/0dad7aea-895f-4cb8-bc16-15db263b5271">

<img width="471" alt="キャプチャ20240530_2" src="https://github.com/ttyimw/react-tetris/assets/25152903/5b51db24-0ddf-4c8d-954e-39835dd155d4">

# game description
- 横一列を揃えてブロック消去するとscoreが上がります。
- scoreが一定ラインを超えるとlevelが上がります。
- levelが上がるとブロック落下速度が速くなります。

# technology

<div style="display:flex;">
<img height="32" width="32" src="https://cdn.simpleicons.org/react" />
<img height="32" width="32" src="https://cdn.simpleicons.org/Typescript" />
<img height="32" width="32" src="https://cdn.simpleicons.org/sass" />
<img height="32" width="32" src="https://cdn.simpleicons.org/storybook" />
<img height="32" width="32" src="https://cdn.simpleicons.org/webpack" />
</div>

# version
- node: 16.20.
- yarn: 1.22.

# design
- atomic design
- separate logic and view

# src directory

src  
│&nbsp;&nbsp;base.scss  
│&nbsp;&nbsp;index.html  
│&nbsp;&nbsp;index.tsx  
│&nbsp;&nbsp;  
├─logic  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;event.tsx  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mino.ts  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tetrisFrame.scss  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TetrisFrame.tsx  
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
└─view  
&nbsp;&nbsp;├─assets  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;structure.ts  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;├─atom  
&nbsp;&nbsp;│&nbsp;&nbsp;└─block  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block.scss  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Block.stories.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Block.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;├─molecule  
&nbsp;&nbsp;│&nbsp;&nbsp;└─mino  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mino.stories.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mino.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;├─organism  
&nbsp;&nbsp;│&nbsp;&nbsp;├─game  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Game.stories.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Game.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;│&nbsp;&nbsp;├─gameover  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gameOver.scss  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GameOver.stories.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GameOver.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;│&nbsp;&nbsp;├─score  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score.stories.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;│&nbsp;&nbsp;└─title  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title.scss  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title.stories.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title.tsx  
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
&nbsp;&nbsp;└─template  
&nbsp;&nbsp;&nbsp;&nbsp;└─frame  
&nbsp;&nbsp;&nbsp;&nbsp;Frame.stories.tsx  
&nbsp;&nbsp;&nbsp;&nbsp;Frame.tsx  

# attention

主要ソースコードをgitignoreしたのでcloneしてもstartできません。

# introduction
- install node/yarn
- change node/yarn version
- crone repository
- type command
```
cd react-tetris
yarn install
yarn run start
```