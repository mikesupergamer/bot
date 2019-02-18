const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('Connecté en tant que ' + bot.user.tag);
});



bot.on('message', message => {       // Machine à définition
  if (message.content.startsWith('+def')) {

    if (message.content.startsWith('+deflist')) {
      message.channel.send("__**Liste des termes définis**__ \n``` - Allosexualité / Zedsexualité / Z-sexualité \n - Androsexualité \n - Androgynosexualité \n - Apothisexualité \n - Asexuel \n - Autosexuel \n - Bisexualité \n - Caed(o)sexualité \n - Cétérosexualité \n - Cupiosexualité \n - Demisexualité / Demi-sexualité \n - Dysphorasexualité \n - Fraysexualité / Ignotasexualité \n - Greysexualité / Graysexualité / Gray-(a)sexualité / Grey-(a)sexualité \n - Gynésexualité \n - Hétérosexualité  \n - Homosexualité \n - Homosexuel \n - Homosexuelle \n - Lamvanosexualité \n - Lith(o)sexualité \n - Monosexualité \n - Multisexualité \n - Neurosexualité \n - Ninsexualité \n - Novisexualité \n - Omnisexualité \n - Omniasexualité / Panasexualité \n - Pansexualité \n - Polysexualité \n - Placiosexualité \n - Proquasexualité \n - Proquusexualité \n - Reciprosexualité \n - Quoisexualité / WTFsexualité / Whatsexualité \n - Questionning \n - Sapiosexuel \n - Skoliosexuel \n - Xumsexuel```")
    }


    else if (message.content.startsWith('+def bisex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Bisexualité',
            icon_url: 'https://pm1.narvii.com/6434/7f3387d3bf0ee9791c41b35b82211f551ec4e6f1_128.jpg'
          },
          title: 'Attirance sexuelle envers certains genres identiques ou différents du siens / des siens.',

        }
      })
    }

    else if (message.content.startsWith('+def homosexual')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Homosexualité',
            icon_url: 'https://pm1.narvii.com/6475/4e3ed569458657ac960f67973649245dd1edd63c_128.jpg'
          },
          title: 'Attirance envers un genre identique au sien / à un des siens. Opposé de l\'hétérosexualité. ',
        }
      })
    }

    else if (message.content.startsWith('+def hétérosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Hétérosexualité',
            icon_url: 'https://pm1.narvii.com/6853/9ddda264651ae6b3a5ba086f8be4a4d3d9803cf2v2_128.jpg'
          },
          title: 'Attirance envers un genre différent du sien / d\'un des siens. Opposé de l\'homosexualité. ',

        }
      })
    }
    else if (message.content.startsWith('+def asex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Asexualité',
            icon_url: 'https://pm1.narvii.com/6451/8be4a4c74f20b263f19ac460add7410861241127_128.jpg'
          },
          title: 'Absence d\'attirance sexuelle. Opposé de l\'allosexualité.',

        }
      })
    }



    else if (message.content.startsWith('+def greysex') || message.content.startsWith('+def graysex') || message.content.startsWith('+def gray-sex') || message.content.startsWith('+def grey-sex') || message.content.startsWith('+def gray-asex') || message.content.startsWith('+def grey-asex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Greysexualité',
            icon_url: 'https://pm1.narvii.com/7004/ae7122b5ae1ca1b3d467795f752847f70056feefr1-466-354v2_128.jpg'
          },
          title: 'Peu d\'attirance sexuelle, entre une orientation sexuelle et asexuelle. Le préfixe \"gris\" peut s\'appliquer à d\'autres sexualités. Exemple : gris-homosexuel, gris-pansexuel. ',

        }
      })
    }




    else if (message.content.startsWith('+def pansex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Pansexualité',
            icon_url: 'https://pm1.narvii.com/6411/2bbb8cdaf44e5df54d5eed478aef623a4af684fa_128.jpg'
          },
          title: 'Attirance sexuelle qui ne prête pas attention au genre/sexe. ',

        }
      })
    }


    else if (message.content.startsWith('+def allosex') || message.content.startsWith('+def zedsex') || message.content.startsWith('+def zed-sex') || message.content.startsWith('+def zsex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Allosexualité',
            icon_url: 'https://pm1.narvii.com/6824/48fbc72fc5cd33cf9f817a92a37734a73b818c49v2_128.jpg'
          },
          title: 'Présence d\'attirance sexuelle. Opposé de l\'asexualité. ',

        }
      })
    }


    else if (message.content.startsWith('+def demisex') || message.content.startsWith('+def demi-sex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Demisexualité',
            icon_url: 'https://pm1.narvii.com/6507/42133d313ddd079a6a2892bd962e9b077dde797a_128.jpg'
          },
          title: 'Attirance sexuelle uniquement envers des personnes avec qui un lien fort a été crée. Dérivé de la gris-sexualité. Le préfixe \'demi\' peut s\'appliquer à d\'autres sexualités. Exemple : demi-homosexuel, demi-pansexuel.',

        }
      })
    }

    else if (message.content.startsWith('+def quoisex') || message.content.startsWith('+def wtfsex') || message.content.startsWith('+def whatsex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Quoisexualité',
            icon_url: 'https://pm1.narvii.com/6812/bc3d2e8653aa975377cb8e13daa7d050058b39bav2_128.jpg'
          },
          title: 'Incompréhension de son attirance sexuelle, difficulté à se définir.',

        }
      })
    }



    else if (message.content.startsWith('+def fraysex') || message.content.startsWith('+def ignotasex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Fraysexualité',
            icon_url: 'https://pm1.narvii.com/6620/752eb91a8a6c3d4e209ee0bd8444cb03f8524d87_128.jpg'
          },
          title: 'Attirance sexuelle au début d\'une relation, mais s\'estompant au fil du temps. Dérivé de la gris-sexualité. Le préfixe "fray" peut s\'appliquer à d\'autres sexualités. Exemple : fray-homosexuel, fray-pansexuel.',

        }
      })
    }

    else if (message.content.startsWith('+def omnisex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Omnisexualité',
            icon_url: 'https://pm1.narvii.com/6530/74d172a1ce1685d2c51c070f43b0c635e1082477_128.jpg'
          },
          title: "Attirance sexuelle envers tout les genres, et où le genre à son importance, on peut donc avoir des préférences. ",
        }
      })
    }



    else if (message.content.startsWith('+def cupiosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Cupiosexualité',
            icon_url: 'https://pm1.narvii.com/6918/6a4e3db704e003f5acac64aaea96fb79df4d22d7r1-307-164v2_128.j'
          },
          title: 'Désir de vouloir ressentir de l\'attirance sexuelle, sans toutefois en ressentir. Dérivé de la gris-sexualité.',

        }
      })
    }


    else if (message.content.startsWith('+def aegosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Aegosexualité',
            icon_url: 'https://pm1.narvii.com/6950/6438420b38847ab8d8b1de49ae63b3e42ced305dr1-960-960v2_128.jpg'
          },
          title: "Fait de ne pas vouloir prendre part à quelconque acte sexuel, mais d\'apprécier quand même la pornographie et l\'érotisme et avoir des fantasmes sexuels. Dérivé de l'asexualité."

        }
      })
    }

    else if (message.content.startsWith('+def omniasex') || message.content.startsWith('+def panasex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Omniasexualité',
            icon_url: 'https://pm1.narvii.com/6827/a521e25e9fe4553830d223310048c174bb5f6ae3v2_128.jpg'
          },
          title: "Absence d'attirance sexuelle, inintéressement à toute conversation relative au sexe. Dérivé de l'asexualité."

        }
      })
    }


    else if (message.content.startsWith('+def apothisex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Apothisexualité',
            icon_url: 'https://pm1.narvii.com/6852/a67b77787fa83c982ac80d99c52f57827f8f8d5fv2_128.jpg'
          },
          title: "Dégoût envers le sexe."

        }
      })
    }



    else if (message.content.startsWith('+def multisex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Multisexualité',
            icon_url: 'https://pm1.narvii.com/6544/a0e60bb38fd4aa607232c41b123c34e49a31517c_128.jpg'
          },
          title: "Attirance sexuelle envers plusieurs genres. Opposé à la monosexualité. "

        }
      })
    }

    else if (message.content.startsWith('+def polysex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Polysexualité',
            icon_url: 'https://pm1.narvii.com/6530/e7c3ec6f59920d5f3feb8f9cfbe1faa2deec8568_128.jpg'
          },
          title: "Attirance envers plusieurs genres, mais pas envers tous."

        }
      })
    }
    else if (message.content.startsWith('+def homosexuelle') || message.content.startsWith('+def lesbienne')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Homosexuelle',
            icon_url: 'https://pm1.narvii.com/6851/8c4e9362d0557ea6311698a8c7b90becbea03a42v2_128.jpg'
          },
          title: "Personne ayant un genre sur le spectre féminin, et étant attirée par un ou plusieurs de ses genres."

        }
      })
    }


    else if (message.content.startsWith('+def question')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Questionning',
            icon_url: 'https://pm1.narvii.com/6825/fbc29101104ac752751f05b2bc88e0f9251db231v2_128.jpg'
          },
          title: "Etat où la personne a du mal à se définir sur le plan d'attirance et / ou de genre."

        }
      })
    }
    else if (message.content.startsWith('+def abrosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Abrosexualité',
            icon_url: 'https://pm1.narvii.com/6804/ec06828f2d30d026ca716114bd09266cf622a67cv2_128.jpg'
          },
          title: "Attirance sexuelle fluide - changeant au cours du temps."

        }
      })
    }
    else if (message.content.startsWith('+def implasex') || message.content.startsWith('+def inexsex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Implasexualité',
            icon_url: 'https://pm1.narvii.com/6864/2d2a7c74cc646cfa3c3f8ccc588cf1658e11213dr1-1080-656v2_128.jpg'
          },
          title: " Doute sur son attirance sexuelle causée par des manques de confiances en soi et / ou des problèmes d'appartenance de genre. Son équivalent neuroatypique est la xumsexualité. "

        }
      })
    }

    else if (message.content.startsWith('+def hypersex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Hypersexualité',
            icon_url: 'https://pm1.narvii.com/6827/896caf2c052e51ea9b5aa6dd17248161a51c47efv2_128.jpg'
          },
          title: "Fortes attirances sexuelles. Opposé à l'hyposexualité"

        }
      })
    }

    else if (message.content.startsWith('+def hyposex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Hyposexualité',
            icon_url: 'https://pm1.narvii.com/6827/165c45c33ae9100eda2a3ef3144d23edd31c58efv2_128.jpg'
          },
          title: 'Faibles attirances sexuelles. Opposé à l\'hypersexualité. '

        }
      })
    }

    else if (message.content.startsWith('+def sapiosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Sapiosexualité',
            icon_url: 'https://pm1.narvii.com/6726/cf750e99473583b7aa8d7811d8e585939304165dv2_128.jpg'
          },
          title: "Attirance sexuelle envers un ou plusieurs individus, essentiellement déclenchée par l\'intellect, la vivacité d\'esprit de ce(s) dernier(s)."

        }
      })
    }

    else if (message.content.startsWith('+def skoliosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Skoliosexualité',
            icon_url: 'https://pm1.narvii.com/6726/26abf029765172f623f5f848cea7945462f4a1d3v2_128.jpg'
          },
          title: "Attirance sexuelle envers un / des genre(s) non-binaire(s)."

        }
      })
    }

    else if (message.content.startsWith('+def cétérosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Cétérosexualité',
            icon_url: 'https://image.noelshack.com/fichiers/2019/07/1/1549904127-ctsx.jpg'
          },
          title: "Attirance sexuelle d'une personne non-binaire envers un / des genre(s) non-binaire(s)."

        }
      })
    }

    else if (message.content.startsWith('+def novisex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Novisexualité',
            icon_url: 'https://pm1.narvii.com/6827/049ad13103e55bd60f8cd4b1e3b236c2f669084fv2_128.jpg'
          },
          title: "Attirance sexuelle compliquée à un tel point qu'on ne peut la définir en un seul terme."

        }
      })
    }

    else if (message.content.startsWith('+def gynésex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Gynésexualité',
            icon_url: 'https://pm1.narvii.com/6823/acdfd2ac94f60b098201ec8bc4f0708c4c4eef1bv2_128.jpg'
          },
          title: 'Attirance sexuelle envers des personnes " féminines " ( la féminité étant subjective ). Opposé à l\'androsexualité. '

        }
      })
    }

    else if (message.content.startsWith('+def androsex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Androsexualité',
            icon_url: 'https://pm1.narvii.com/6891/af1b4cd26993b392264af1e3ceb7f36dbf592440r1-736-411v2_128.jpg'
          },
          title: 'Attirance sexuelle envers des personnes " masculines " ( la masculinité étant subjective ). Opposé à la gynésexualité. '

        }
      })
    }

    else if (message.content.startsWith('+def ninsex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Ninsexualité',
            icon_url: 'https://pm1.narvii.com/6726/667cf170b6667d94b560dc23e1baf339d2221fb5v2_128.jpg'
          },
          title: 'Attirance sexuelle envers des personnes de genre(s) du spectre neutre, et étant androgynes ( physique " masculin et féminin " ( la masculinité et féminité étant subjectifs.ves )). '

        }
      })
    }

    else if (message.content.startsWith('+def androgynosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Androgynosexualité',
            icon_url: 'https://image.noelshack.com/fichiers/2019/07/1/1549904258-androgyns.jpg'
          },
          title: 'Attirance sexuelle envers des personnes de genre(s) du spectre féminin et / ou masculin, et étant androgynes ( physique " masculin et féminin " ( la masculinité et féminité étant subjectifs.ves )). '

        }
      })
    }

    else if (message.content.startsWith('+def proquasex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Proquasexualité',
            icon_url: 'https://pm1.narvii.com/6681/a27d852a3cd930d07b4592f442cf19903aeb3e0d_128.jpg'
          },
          title: 'Attirance sexuelle d\'une personne " féminine " envers des personnes " féminines " ( la féminité étant subjective ). Opposé à la proquusexualité. '

        }
      })
    }

    else if (message.content.startsWith('+def proquusex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Proquusexualité',
            icon_url: 'https://pm1.narvii.com/6681/66f53a98ec1637f9f073b76f2402fddd36d53c16_128.jpg'
          },
          title: 'Attirance sexuelle d\'une personne " masculine " envers des personnes " masculines " ( la masculinité étant subjective ). Opposé à la proquasexualité ". '

        }
      })
    }

    else if (message.content.startsWith('+def lithsex') || message.content.startsWith('+def lithosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Lith(o)sexualité',
            icon_url: 'https://pm1.narvii.com/6620/2396c7254517fea338967ad586c4028771afdbe7_128.jpg'
          },
          title: 'Fait de ne pas vouloir que l\'attirance sexuelle que l\'on porte à une personne soit réciproque. Dérivé la gris-sexualité. Le préfixe "lith(o)" peut s\'appliquer à d\'autres sexualités. Exemple : lith(o)-homosexuel, lith(o)-pansexuel.'

        }
      })
    }

    else if (message.content.startsWith('+def autosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Autosexualité',
            icon_url: 'https://pm1.narvii.com/6620/9f56bfd01029f878d36457ca9a8622503e46d08f_128.jpg'
          },
          title: 'Attirance sexuelle envers soi-même. A ne pas confondre avec le narcissisme. Le préfixe "auto" peut s\'appliquer à d\'autres sexualités. Exemple : auto-homosexuel, auto-pansexuel. '

        }
      })
    }

    else if (message.content.startsWith('+def lamvanosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Lamvanosexualité',
            icon_url: 'https://pm1.narvii.com/6743/628ed4d59879f1d532af77b18f870c8190123e2dv2_128.jpg'
          },
          title: 'Envie que les actes sexuels soient pratiqués uniquement sur soi même, mais ne pas les pratiquer sur les autres. Opposé à la placiosexualité. Le préfixe "lamvano" peut s\'appliquer à d\'autres sexualités. Exemple : lamvano-homosexuel, lamvano-pansexuel. '

        }
      })
    }
    else if (message.content.startsWith('+def monosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Monosexualité',
            icon_url: 'https://pm1.narvii.com/6625/c9eb004f1297e91afa5c9e21fb391d666e614cf9_128.jpg'
          },
          title: 'Attirance sexuelle envers un seul genre. Opposé à la multisexualité. '

        }
      })
    }


    else if (message.content.startsWith('+def placiosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Placiosexualité',
            icon_url: 'https://pm1.narvii.com/6681/9349011a63f05b0c8fd14ad6d84878cd0e2a6304_128.jpg'
          },
          title: 'Envie de pratiquer uniquement sur les autres, mais qu\'ils ne soient pas pratiqués sur soi-même. Opposé à la placiosexualité. Le préfixe "placio" peut s\'appliquer à d\'autres sexualités. Exemple : placio-homosexuel, placio-pansexuel. '

        }
      })
    }

    else if (message.content.startsWith('+def neurosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Neurosexualité',
            icon_url: 'https://pm1.narvii.com/6828/3ab58d8d923a601b4305d7584513fe153820b472v2_128.jpg'
          },
          title: 'Attirance sexuelle liée au neurotype, à la maladie mentale ou/et aux conditions neurologiques d\'un individu. Le préfixe "neuro" peut s\'appliquer à d\'autres sexualités. Exemple : neuro-homosexuel, neuro-pansexuel. '

        }
      })
    }

    else if (message.content.startsWith('+def xumsex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Xumsexualité',
            icon_url: 'https://pm1.narvii.com/6866/df38e318d7030016f1ae3a29f8c37f419615abcar1-985-591v2_128.jpg'
          },
          title: 'Doute sur son attirance sexuelle, causée par de l\'anxiété ou des TOC. C\'est une neuroatypie, son équivalent neurotypique est l\'implasexualité '

        }
      })
    }

    else if (message.content.startsWith('+def dysphorasex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Dysphorasexualité',
            icon_url: 'https://pm1.narvii.com/6866/045ba174c29f031996b9e1d8cd2fcbad3667e050r1-1153-692v2_128.jpg'
          },
          title: 'Incapacité à avoir des relations sexuelles à cause de sa dysphorie de genre. Le préfixe "dysphora" peut s\'appliquer à d\'autres sexualités. Exemple : dysphora-homosexuel, dysphora-pansexuel.'

        }
      })
    }
    
    else if (message.content.startsWith('+def caedosex') || message.content.startsWith('+def caedsex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Caed(o)sexualité',
            icon_url: 'https://pm1.narvii.com/6864/6c2e563c782603b3482e86ffcf070fea6bcd7ca8r1-1080-712v2_128.jpg'
          },
          title: 'Incapacité de ressentir une attirance sexuelle, dû à un traumatisme. C\'est une neuroatypie.'

        }
      })
    }

    else if (message.content.startsWith('+def reciprosex')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Reciprosexualité',
            icon_url: 'https://pm1.narvii.com/6852/7b6ed8458c4f3e91be7841f669bae29d8d9c4a72v2_128.jpg'
          },
          title: 'Attirance sexuelle ne pouvant subsister que quand l\'autre ressent déjà de l\'attirance sexuelle. Le préfixe "recipro" peut s\'appliquer à d\'autres sexualités. Exemple : recipro-homosexuel, recipro-pansexuel. ' 

        }
      })
    }




    


    /* ---------------------------------------------------------- */
    else if (message.content.startsWith('+def homosexuel') || message.content.startsWith('+def gay')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Homosexuel',
            icon_url: 'https://pm1.narvii.com/6851/9b5705e458587cf99cc8a7d5d2d6f388feac0ac6v2_128.jpg'
          },
          title: "Personne ayant un genre sur le spectre masculin, et étant attiré par son genre."

        }
      })
    }

  }
});







bot.login(process.env.TOKEN);
