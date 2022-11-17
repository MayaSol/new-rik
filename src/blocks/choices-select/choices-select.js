const ready = require('../../js/utils/documentReady.js');
const Choices = require('choices.js');
// import Choices from 'choices.js';

ready(function() {
  const select = document.getElementById('profile-page-select');
  if (select) {
    var options = select.options;
    var choicesItems = [];
    var selectedValue = 0;
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedValue = options[i].value;
        }
        choicesItems.push({
          value: options[i].value,
          label: options[i].innerText,
          customProperties: {
            icon: options[i].dataset.icon,
            href: options[i].dataset.href
          }
        });
    }
    console.log(choicesItems);
    let choices = new Choices(select,
      {
        searchEnabled: false,
        allowHTML: true,
        itemSelectText: '',
        duplicateItemsAllowed: false,
        shouldSort: false,
        // sorter: function(a, b) {
        //   console.log('sorter');
        //   console.log(a.value);
        //   console.log(b.value);
        //   console.log(a.value - b.value);
        //     return a.value - b.value;
        // },
        callbackOnCreateTemplates: function(template) {
          // console.log('this');
          // console.log(this);
          var classNames = this.config.classNames;
          var itemSelectText = this.config.itemSelectText;
          return {
            item: (classNames, data) => {
              return template(`
              <div class="${classNames.item} ${
              data.highlighted
                ? classNames.highlightedState
                : classNames.itemSelectable
            } ${
              data.placeholder ? classNames.placeholder : ''
            }" data-item data-id="${data.id}" data-value="${data.value}" ${
              data.active ? 'aria-selected="true"' : ''
            } ${data.disabled ? 'aria-disabled="true"' : ''}>
                <svg width="20" height="20" aria-hidden="true" focusable="false">
                  <use xlink:href="/img/sprite.svg#${data.customProperties.icon}"></use>
                </svg>
                <span>${data.label}</span>
              </div>
            `);
            },
            choice: (classNames, data) => {
              return template(`
          <div class="${classNames.item} ${classNames.itemChoice} ${
          data.disabled ? classNames.itemDisabled : classNames.itemSelectable
        }" data-select-text="${this.config.itemSelectText}" data-choice ${
          data.disabled
            ? 'data-choice-disabled aria-disabled="true"'
            : 'data-choice-selectable'
        } data-id="${data.id}" data-value="${data.value}" ${
          data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
        }>
            <svg width="20" height="20" aria-hidden="true" focusable="false">
              <use xlink:href="/img/sprite.svg#${data.customProperties.icon}"></use>
            </svg>
            <span>${data.label}</span>
          </div>
        `);
            },
          };
        },
      }); //new Choices(item, {

    choices.clearChoices();
    choices.setChoices(
      choicesItems,
      'value',
      'label',
      true,
    );
    choices.setChoiceByValue(selectedValue);
    choices.passedElement.element.addEventListener(
      'choice',
      function(event) {
        console.log(event);
        document.location.href = document.location.origin + event.detail.choice.customProperties.href;
        // console.log(event.detail.id);
        // console.log(event.detail.value);
        // console.log(event.detail.label);
        // console.log(event.detail.customProperties);
        // console.log(event.detail.groupValue);
        // do something creative here...
        // document.location.href = document.location.origin + event.detail.value;
      },
      false,
    );
  } //if (select)

});
