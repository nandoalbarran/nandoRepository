$(document).ready(function () {

  nandoalbarran = {
    copy: {
      name: 'Nando Albarr&aacute;n!',
      email: 'nando@nandoalbarran.com',
      network: {
        linkedin: 'http://www.linkedin.com/in/nandoalbarran',
        skype: 'skype:nandoalbarran?call'
      }
    },
    section: {
      'home': {
        title: 'Hi, i\'m',
        subtitleFixed: 'Front End Developer and...',
        subtitle: [
          'iGaming industry passionate',
          'Scuba diving enthusiast',
          'Sevilla FC supporter',
          'Travelling lover'
        ],
        description: [
          'Welcome to my personal site. I am Nando, a 5+ years experienced FRONT END DEVELOPER. Very organized, confident, with excellent communication skills and good at liaising with customers. Hard working team player, accustomed to work under pressure with deadline.',
          'Gambling focused, studied Statistics Diploma Qualification at Seville University and Web Development at Punta del Verde College of Seville.'
        ]
      },
      career: {
        lottoland: {
          date: '04/2015 - Nowadays',
          description: 'Conversion Rate Optimisation Team',
          location: 'GX11 1AA',
          img: 'll'
        },
        sportingbet: {
          date: '11/2014 - 04/2015',
          description: 'Betboo and Superbahis turkish markets',
          location: 'EC2Y 9AE',
          img: 'sb'
        },
        localgiving: {
          date: '09/2014 - 11/2014',
          description: 'Charity platform front end development',
          location: 'WC1V 7DN',
          img: 'lg'
        },
        streamingtank: {
          date: '02/2014 - 09/2015',
          description: 'Video streaming third-party web dev',
          location: 'WC2B 5LQ',
          img: 'st'
        }
      },
      skills: [
        'Web techonologies: XHTML, XSLT, AJAX, JSON, XML, RESTful APIs and RSS',
        'Experience with HTML5, CSS3, SASS, Stylus, JavaScript OO and PHP5',
        'Frameworks/Libraries: jQuery (+Mobile), Bootstrap RWD, 960 GS, HTML5 Boilerplate, Smarty, Handlebars/Mustache...',
        'CRO A/B testing and RTM control with Optimizely, Evergage, Qubit and Maxymiser',
        'Sketch, PhotoShop, Invision and Freehand graphic design software handling',
        'GitHub and Perforce repository connection, taking part of a team',
        'Automation tasks through Gulp',
        'Use of BEM naming convention',
        'Code management platform with Google Tag Manager',
        'Social Media APIs: Facebook, Twitter, Google & Vine',
        'Performance optimisation, progressive enhancement, usability and accessibility',
        'WordPress CMS with template hand-coding',
        'WAMP/XAMPP/MAMP environment handling',
        'Capable to build and manage SQL queries + MySQL & NOSQL + MongoDB databases',
        'SEO validation following the w3C standard',
        'Google Analytics & statistical tools knowledge',
        'Good presentation, clean code, documented and reusable'
      ],
      interest: [
        'Volunteer activities',
        'Travelling',
        'New techonologies',
        'Music',
        'Scuba diving',
        'Education',
        'Gambling',
        'Driving license',
        'DOB: 20/11/1979',
        'Learning new development languages'
      ]
    },
    /**
     * @method underscore
     * @return subtitle flashing cursor effect
     */
    underscore: function () {

      var self = this, subtitle = self.section.home.subtitle, i = 0, j = 0, $elem = $('section:first-of-type h3 span:last-of-type');

      function erase() {
        var inter = setTimeout(function () {
                  elemContent = $elem.html();
          if (j <= 0) {
            i++;
            i >= subtitle.length ? self.underscore() : type();
          }
          else {
            $elem.html(elemContent.slice(0, -1));
            j--;
            erase();
          }
        }, 50);
      }

      function type() {
        var inter = setTimeout(function () {
          var display = subtitle[i], long = display.length;
          if (i < subtitle.length) {
            if (j < long) {
              var char = display.charAt(j);
              $elem.append(char);
              j++;
              type();
            }
            else
              setTimeout(function () {
                erase();
              }, 4000);
          }
        }, 150);
      }

      type();

    },
    /**
     * @method navigation
     * @return navigation DOM filler
     */
    navigation: function () {

      var self = this, section = self.section, str = '<ul>', pos = -1;

      $.each(section, function (i, v) {
        str += '<li><span>' + i + '</span></li>';
        if (i !== 'home')
          $('section h2').eq(pos).empty().html(i);
        pos++;
      });

      str += '</ul>';
      $('nav').append(str).find('li:first-of-type').addClass('active');

    },
    /**
     * @method home
     * @return home section DOM filler
     */
    home: function () {

      var self = this, home = self.section.home, $section_first = $('section:first-of-type'), str = '';

      str += '<div class="description-text">';

      $.each(home.description, function (i, v) {
        str += '<p>' + v + '</p>';
      });

      str += '</div>';
      $section_first.find('h1').empty().html(home.title + '<span> ' + self.copy.name + '</span>');
      $section_first.find('h3 span').empty().eq(0).html(home.subtitleFixed);
      $section_first.find('hr').after(str);
      $section_first.find('.contact-box-item a').html(self.copy.email).attr('href', 'mailto:'+self.copy.email);
      $section_first.find('.social-box-item a:first-of-type').attr('href', self.copy.network.linkedin);
      $section_first.find('.social-box-item a:last-of-type').attr('href', self.copy.network.skype);
      
      // underscore effect
      self.underscore();

    },
    /**
     * @method career
     * @return career section DOM filler
     */
    career: function () {

      var self = this, career = self.section.career, $section_second = $('section:nth-child(3)'), str = '';

      $.each(career, function (i, v) {
        str += '<div class="' + i + '">' +
          '<div class="wrapper">' +
          '<div class="wrapper-career">' +
          '<h2>' + i + ' <i>(' + v.location + ')</i></h2>' +
          '<p>' + v.date + '</p>' +
          '<p>' + v.description + '</p>' +
          '</div></div></div>';
      });

      $section_second.find('h2').after(str);

    },
    /**
     * @method liDisplayer
     * @param {section} block with list item
     * @param {pos} section position
     * @return fill list item
     */
    liDisplayer: function (section, pos) {

      var self = this, skills = self.section[section], $section = $('section:nth-child(' + pos + ')'), str = '<ul>';

      $.each(skills, function (i, v) {
        str += '<li>' + v + '</li>';
      });

      str += '</ul>';
      $section.find('h2').after(str);

    },
    /**
     * @method injectHTML
     * @return DOM filler
     */
    injectHTML: function () {

      var self = this, lang = self.copy[self.lang];

      // navigation && section title
      self.navigation();

      // home
      self.home();

      // career
      self.career();

      // skills && interest
      self.liDisplayer('skills', 4);
      self.liDisplayer('interest', 5);

    },
    /**
     * @method wink
     * @return avatar wink effect
     */
    wink: function () {

      var self = this, $elem = $('.img-profile img'), rand = Math.round(Math.random() * (10000 - 5000)) + 1000;
      setTimeout(function () {
        $elem.attr("src", "assets/images/close.png");
        setTimeout(function () {
          $elem.attr("src", "assets/images/open.png");
        }, 200);
        self.wink();
      }, rand);

    },
    /**
     * @method listeners
     * @return navigation and section controller
     */
    listeners: function () {

      var self = this, $navigationList = $('nav li');

      // navigation activator
      $navigationList.on('click', function () {
        var $listItem = $(this);
        $navigationList.removeClass('active');
        $listItem.addClass('active');
        if ($listItem.index() !== 0) {
          if (!$('nav').hasClass('sideActive')) {
            $('nav, section:first-of-type').toggleClass('sideActive');
          }
          $('section:gt(0)').removeClass('sideActive').eq($listItem.index() - 1).addClass('sideActive');

        }
        else {
          if ($('nav').hasClass('sideActive'))
            $('nav, section').removeClass('sideActive');
        }
      });

    },
    /**
     * @method protection
     * @return no clickable images
     */
    protection: function () {

      $(document).on('contextmenu mousedown', 'img', function () {
        return false;
      });

    },
    /**
     * @method init
     * @return fire the script
     */
    init: function () {

      var self = this;

      self.injectHTML();
      self.listeners();
      self.wink();
      self.protection();

    }
  };

  nandoalbarran.init();
});