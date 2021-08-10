import './App.css';

import React, { ReactNode } from 'react';

import Card from './Card';
// eslint-disable-next-line prettier/prettier
import {
  projects,
  Props
} from './projects';

type Projects = {
  projects: Array<Props>;
};

class App extends React.Component<unknown, Projects> {
  public constructor(props: unknown) {
    super(props);
    this.state = {
      projects: []
    };
  }

  public componentDidMount = (): void => {
    this.setState({ projects });
  };

  public render(): ReactNode {
    return (
      <main>
        <h1>Robert DeRouin</h1>
        <h2>Front End Developer</h2>
        <h3>About Me</h3>
        <p>
          To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer the slings
          and arrows of outrageous fortune, or to take arms against a sea of troubles, and by opposing end
          them? To die: to sleep; no more; and, by a sleep to say we end the heart-ache and the thousand
          natural shocks that flesh is heir to, 'tis a consummation devoutly to be wish'd. To die, to
          sleep; to sleep: perchance to dream: ay, there's the rub; for in that sleep of death what dreams
          may come when we have shuffled off this mortal coil, must give us pause. There's the respect
          that makes calamity of so long a life; for who would bear the whips and scorns of time, the
          oppressor's wrong, the proud man's contumely, the pangs of dispriz'd love, the law's delay, the
          insolence of office, and the spurns that patient merit of the unworthy takes, when he himself
          might his quietus make with a bare bodkin? Who would fardels bear, to grunt and sweat under a
          weary life, but that the dread of something after death, the undiscover'd country from whose
          bourn no traveller returns, puzzles the will, and makes us rather bear those ills we have, than
          fly to others that we know not of? Thus consience doth make cowards of us all; and thus the
          native hue of resolution is sicklied o'er with the pale cast of thought, and enterprises of
          great pith and moment with this regard their currents turn awry, and lose the name of action.
        </p>
        <h3>Projects</h3>
        <div>
          {this.state.projects.map((project) => {
            return <Card {...project} />;
          })}
        </div>
      </main>
    );
  }
}

export default App;