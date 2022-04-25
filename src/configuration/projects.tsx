import funzi from "../assets/projects/funzi.png"
import zzzcg from "../assets/projects/zzzcg.png"
import mod from "../assets/projects/mod.png"

export interface IProjectProp {
    name: string;
    description: string;
    link: string;
    image: any;
  }
  export const projects:  IProjectProp[] = [{
    name: 'Zavod za zaposljavanje Crne Gore',
    description: 'Zavod za zapošljavanje Crne Gore je pravno lice koje ima status državnog fonda i obavlja djelatnost koja obuhvata poslove u vezi sa zapošljavanjem utvrđene Zakonom o posredovanju pri zapošljavanju i pravima za vrijeme nezaposlenosti, drugim propisima i Statutom Zavoda, kao poslove iz prenesene nadležnosti.',
    link: 'https://www.zzzcg.me/',
    image: zzzcg,
  }, {
    name: 'Funzi',
    description: 'Funzi is the world\'s most accessible learning ecosystem. Our short self-study courses make learning 21st century skills available for anyone with a mobile device.',
    link: 'https://funzi.mobi/',
    image: funzi,
  }, {
    name: 'Budi vojnik',
    description: 'Veb aplikacija „Budi vojnik“ će na inovativan način informisati mlade o mogućnostima za profesionalno usavršavanje i približiti im misiju i viziju Vojske Crne Gore (VCG).',
    link: 'https://budivojnik.me/',
    image: mod,
  }];