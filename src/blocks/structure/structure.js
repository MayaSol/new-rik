const ready = require('../../js/utils/documentReady.js');
const Collapse = require('../../../node_modules/bootstrap/js/dist/collapse.js');
import tippy from 'tippy.js';

ready(function() {

  var tippyOptions = {
    content: '',
    allowHTML: true,
    appendTo: document.querySelector('#structureFeatures'),
    maxWidth: 'none',
    interactive: true,
    hideOnClick: true,
    delay: [0, 1000],
    // trigger: 'click' //!!!
  };

  var btnsAll = document.querySelectorAll('#structure [data-bs-target]');
  if (document.documentElement.clientWidth >= 1024) {
    for (btn of btnsAll) {
      tippyOptions.content = document.querySelector(btn.dataset.bsTarget).innerHTML;
      tippy(btn, tippyOptions);
      btn.addEventListener('mouseenter', function(event) {
        iconAnimationStart(this);
      });
      btn.addEventListener('mouseleave', function(event) {
        iconAnimationEnd(this);
      });
    }
  }

  //!!!!!!!!!!!!!!!!
  var timerId;
  var container = document.querySelector('#structureText');
  if (container) {

    var contentOld = container.innerHTML;
    var btnsAll = document.querySelectorAll('#structure2 [data-bs-target]');
    if (document.documentElement.clientWidth >= 1024) {
      for (btn of btnsAll) {
        // tippyOptions.content = document.querySelector(btn.dataset.bsTarget).innerHTML;
        // tippy(btn, tippyOptions);
        container.addEventListener('mouseenter', function(event) {
          clearTimeout(timerId);
        })
        container.addEventListener('mouseleave', function(event) {
          setContentTimer();
        })
        btn.addEventListener('mouseenter', function(event) {
          clearTimeout(timerId);
          console.log(this.dataset.bsTarget + '.structure__features-collapse');
          var content = document.querySelector(this.dataset.bsTarget + '.structure__features-collpase').innerHTML;
          container.innerHTML = content;
          iconAnimationStart(this);
        });
        btn.addEventListener('mouseleave', function(event) {
          setContentTimer();
          iconAnimationEnd(this);
        });

        function setContentTimer() {
          //!!! clearTimeout(timerId);
          timerId = setTimeout(() => {
            container.innerHTML = contentOld;
          }, 3000); //!!!!
        }
      }
    }
  }

  //!!!!!!!!!!!!!!!!

  var btnsLg = document.querySelectorAll('.structure__btn-icon');
  for (btn of btnsLg) {
    btn.addEventListener('mouseenter', function(event) {
      iconAnimationStart(this);
      iconAnimationStart(document.querySelector('.structure__ray-icon[data-bs-target="' + this.dataset.bsTarget + '"]'));
    });
    btn.addEventListener('mouseleave', function(event) {
      iconAnimationEnd(this);
      iconAnimationEnd(document.querySelector('.structure__ray-icon[data-bs-target="' + this.dataset.bsTarget + '"]'));
    });
  }

  var btns = document.querySelectorAll('#structure [data-animate]');
  for (btn of btns) {
    btn.addEventListener('mouseenter', function(event) {
      rayAnimationStart(this);
      // iconAnimationStart(this);
    });
    btn.addEventListener('mouseleave', function(event) {
      rayAnimationEnd(this);
      // iconAnimationEnd(this);
    });
  }

  //!!!!
  var btns = document.querySelectorAll('#structure2 [data-animate]');
  for (btn of btns) {
    btn.addEventListener('mouseenter', function(event) {
      rayAnimationStart(this);
      // iconAnimationStart(this);
    });
    btn.addEventListener('mouseleave', function(event) {
      rayAnimationEnd(this);
      // iconAnimationEnd(this);
    });
  }
  //!!!

  var btn = document.querySelector('.structure__btn-icon:nth-child(5)');
  if (btn) {
    btn.addEventListener('mouseenter', function(event) {
      wavesStart();
    });
    btn.addEventListener('mouseleave', function(event) {
      wavesEnd();
    });
  }

  var btn = document.querySelector('.structure__ray-icon.magnet');
  if (btn) {
    btn.addEventListener('mouseenter', function(event) {
      wavesStart();
    });
    btn.addEventListener('mouseleave', function(event) {
      wavesEnd();
    });
  }

  var btn = document.querySelector('.structure__ray-icon.tens');
  if (btn) {
    btn.addEventListener('mouseenter', function(event) {
      tensStart();
    });
    btn.addEventListener('mouseleave', function(event) {
      tensEnd();
    });
  }

  var btn = document.querySelector('.structure__btn-icon:nth-child(6)');
  if (btn) {
    btn.addEventListener('mouseenter', function(event) {
      tensStart();
    });
    btn.addEventListener('mouseleave', function(event) {
      tensEnd();
    });
  }
});

function tensStart() {
  // var tenses = document.querySelectorAll('.tens');
  // tenses.push(docuemnt.querySelector())
  // for (var i = 0; i < tenses.length; i++) {
  //   tenses[i].querySelector('.tens_line_1').classList.add(`pulse_tens`);
  //   tenses[i].querySelector('.tens_line_2').classList.add(`pulse_tens`);
  //   tenses[i].querySelector('.tens_line_1').classList.add(`pulse_tens_${i}_1`);
  //   tenses[i].querySelector('.tens_line_2').classList.add(`pulse_tens_${i}_2`);
  // }
  var electricity = document.querySelector('.electricity');
  electricity.classList.add('pulse_electr');
  var electrodes = document.querySelector('.electrodes');
  electrodes.classList.add('active');
};

function tensEnd() {
  // var tenses = document.querySelectorAll('.tens');
  // for (var i = 0; i < tenses.length; i++) {
  //   tenses[i].querySelector('.tens_line_1').classList.remove(`pulse_tens`);
  //   tenses[i].querySelector('.tens_line_2').classList.remove(`pulse_tens`);
  //   tenses[i].querySelector('.tens_line_1').classList.remove(`pulse_tens_${i}_1`);
  //   tenses[i].querySelector('.tens_line_2').classList.remove(`pulse_tens_${i}_2`);
  // }
  var electricity = document.querySelector('.electricity');
  electricity.classList.remove('pulse_electr');
  var electrodes = document.querySelector('.electrodes');
  electrodes.classList.remove('active');
}


function wavesStart() {
  var waves = document.querySelectorAll('.wave');
  for (var i = 0; i < waves.length; i++) {
    waves[i].classList.add(`pulse_wave`);
    waves[i].classList.add(`pulse_wave_delay_${i}`);
  }
};

function wavesEnd() {
  var waves = document.querySelectorAll('.wave');
  for (var i = 0; i < waves.length; i++) {
    waves[i].classList.remove(`pulse_wave`);
    waves[i].classList.remove(`pulse_wave_delay_${i}`);
  }
}

function rayAnimationStart(element) {
  var animate = element.dataset.animate;
  if (animate) {
    var animateEl = document.querySelector(animate);
    if (animateEl) {
      animateEl.classList.add('ray-animation');
    }
  }
}

function rayAnimationEnd(element) {
  var animate = element.dataset.animate;
  if (animate) {
    var animateEl = document.querySelector(animate);
    if (animateEl) {
      animateEl.classList.remove('ray-animation');
    }
  }
}


function iconAnimationStart(element) {
  element.classList.add('icon-animation');
}

function iconAnimationEnd(element) {
  element.classList.remove('icon-animation');
}


// function collapseShow(selector) {
//   var collapse = document.querySelector(selector);
//   var bsCollapse = Collapse.getOrCreateInstance(collapse);
//   bsCollapse.show();
// }

// function collapseHide(selector) {
//   var collapse = document.querySelector(selector);
//   var bsCollapse = Collapse.getOrCreateInstance(collapse);
//   bsCollapse.hide();
// }

// function hideAdjacent(selector) {
//   var parent = document.querySelector(selector).dataset.bsParent;
//   if (parent) {
//     var collapses = document.querySelectorAll(parent + ' .structure__features-collpase');
//     for (collapse of collapses) {
//       var instance = Collapse.getOrCreateInstance(collapse);
//       instance.hide();
//     }
//   }
// }

// var collapses = document.querySelectorAll('.structure__features-collpase');
// for (collapse of collapses) {
//   collapse.addEventListener('shown.bs.collapse', function(event) {
//     console.log('shown.bs.collpase');
//     if (this.id) {
//       var btn = document.querySelector('.structure__features-btn[data-bs-target="#' + this.id + '"]');
//       if (btn) {
//         btn.classList.add('open');
//       }
//     }
//   });
//   collapse.addEventListener('hidden.bs.collapse', function(event) {
//     console.log('hidden.bs.collapse');
//     if (this.id) {
//       var btn = document.querySelector('.structure__features-btn[data-bs-target="#' + this.id + '"]');
//       if (btn) {
//         btn.classList.remove('open');
//       }
//     }
//   })
// }
