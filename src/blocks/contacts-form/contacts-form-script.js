<script type="text/javascript" data-ramform-id="7">$(document).ready(function(){new CRamForm({uid: 'crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5', itemsCount: 10, base: {"TEMPLATE":".default","JQUERY":"","AUTO":"Y","SITE":"s1","PAGE_INCLUDE":"\/contacts\/","PAGE_EXCLUDE":"","HTML_SELECTOR":".contacts-form","HTML_INSERTION":"append","FINISH_TEXT":"<h2 style=\"text-align: center;\">\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e<\/h2>"}, template: []});});/* elements.textblock.default */

$(document).ready(function()
{
  class crfi_c33d895cb361c6b7d8c3a033b9b535a4 extends CRamFormItem
  {
    Start()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
    
        if (_this.Changes(data))
        {
          _this.Save(data);
          
          _this.Apply();
        
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
    }
    
    Init()
    {
      var _this = this;
      
      var data = _this.Recalculate(null);
    
      if (_this.Changes(data))
      {
        _this.Save(data);
        
        _this.Apply();
      
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Recalculate(data)
    {
      data = data || null;
      
      var result = {};
      
      if (data == null)
      {
        for (var d in this.params.DATA)
        {
          if (this.params.DATA[d] != null && typeof this.params.DATA[d] === "object" && this.params.DATA[d].SOURCE != null)
          {
            var field = Object.assign({}, this.params.DATA[d]);
            
            field.CALCULATED = CRamForms.CalculateValue(field.SOURCE, this.params.FORM_UID, true);
            
            result[d] = field;
          }
        }
      }
      else if (data.item != null)
      {
        for (var d in this.params.DATA)
        {
          if (this.params.DATA[d] != null && typeof this.params.DATA[d] === "object" && this.params.DATA[d].SOURCE != null)
          {
            var field = Object.assign({}, this.params.DATA[d]);
            
            if (field.SOURCE.search("\\\["+data.item+"\\\.") > -1)
            {
              field.CALCULATED = CRamForms.CalculateValue(field.SOURCE, this.params.FORM_UID, true);
              
              result[d] = field;
            }
          }
        }
      }
      else
      {
        for (var f in data.fields)
        {
          for (var d in this.params.DATA)
          {
            var field = data.fields[f];
            
            if (d == f && this.params.DATA[d] != null && typeof this.params.DATA[d] === "object" && field.SOURCE != null)
            {
              field.CALCULATED = CRamForms.CalculateValue(field.SOURCE, this.params.FORM_UID, true);
            }
            
            result[f] = field;
          }
        }
      }
      
      return result;
    }
    
    Apply()
    {
      $("#crfi_c33d895cb361c6b7d8c3a033b9b535a4 .ramform-textblock").html(this.params.DATA.VALUE.CALCULATED);
    }
  }
  
  var _crfi_c33d895cb361c6b7d8c3a033b9b535a4 = new crfi_c33d895cb361c6b7d8c3a033b9b535a4({"ID":"50","FORM":"7","CODE":"10","SORT":"0","ITEM":"textblock","GROUP":"elements","NAME":"Текст","ACTIVE":"Y","TEMPLATE":"default","DATA":{"HIDDEN":"N","VALUE":{"SOURCE":"<h3>Мы ответим на все интересующие ваши вопросы<br>\r\n </h3>"}},"_PATH":"/bitrix/components/ram/ram.form/items/elements/textblock/templates/default/","FIELDS":{"HIDDEN":{"TITLE":"Скрыть","TYPE":"checkbox"},"VALUE":{"TITLE":"Значение","TYPE":"textarea"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_c33d895cb361c6b7d8c3a033b9b535a4"});
});/* elements.text.default */

$(document).ready(function()
{
  class crfi_88378a252dc566c6fa02e9b89034fa2e extends CRamFormItem
  {
    Start()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        
        data = _this.Validate(data);
    
        if (_this.Changes(data))
        {
          _this.Save(data);
          
          _this.Apply();
        
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
    }
    
    Init()
    {
      var _this = this;
      
      if (this.params.DATA.MASK.length)
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").inputmask(this.params.DATA.MASK, {greedy: false, showMaskOnHover: false});
      }
      
      var data = _this.Recalculate(null);
      
      if (_this.Changes(data))
      {
        _this.Save(data);
        
        _this.Apply(true);
      
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Data()
    {
      if (this.params.DATA.DISABLED == "Y")
      {
        return {};
      }
      
      var error = false;
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        var value = this.params.DATA.VALUE.CALCULATED || "";
        
        if (value.length == 0)
        {
          error = true;
          
          this.params.ERROR = "EMPTY_ERROR";
          
          this.Apply();
        }
        else if (this.params.DATA.MASK.length)
        {
          if (!$("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").inputmask("isComplete"))
          {
            var data = {VALUE: {CALCULATED: "", SOURCE: this.params.DATA.VALUE.SOURCE}};
    
            this.Change(data, null, "");
            
            error = true;
          }
        }
      }
      
      if (!error)
      {
        var data = {};
        
        for (var i in this.params.DATA)
        {
          var value = (this.params.DATA[i] != null && typeof this.params.DATA[i] === "object") ? this.params.DATA[i].CALCULATED : this.params.DATA[i];
          var title = this.params.FIELDS[i].TITLE;
          
          if (i == "VALUE")
          {
            title = this.params.NAME;
          }
          
          data["["+this.params.CODE+"."+i+"]"] = {VALUE: value, TITLE: title};
        }
        
        return data;
      }
      else
      {
        return false;
      }
    }
    
    Validate(data)
    {
      this.params.ERROR = "";
      
      if (this.params.DATA.VALIDATION.length && data.VALUE && data.VALUE.CALCULATED)
      {
        if ((data.VALUE.CALCULATED+"").search(this.params.DATA.VALIDATION) == -1)
        {
          data.VALUE.CALCULATED = "";
          
          this.params.ERROR = "VALIDATION_ERROR";
        }
      }
      else if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1 && data.VALUE && data.VALUE.CALCULATED)
      {
        data.VALUE.CALCULATED = (data.VALUE.CALCULATED+"").substring(0, this.params.DATA.MAX_LENGTH);
      }
      
      return data;
    }
    
    Apply(start)
    {
      start = start || false;
      
      if (this.params.DATA.HIDDEN == "Y")
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e").addClass("ramform-item_hidden");
      }
      else
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e").removeClass("ramform-item_hidden");
      }
      
      if (this.params.DATA.TITLE_HIDDEN == "Y")
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__title").addClass("ramform-item__title_hidden");
      }
      else
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__title").removeClass("ramform-item__title_hidden");
      }
      
      $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__title").html(this.params.DATA.TITLE);
      
      $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").val(this.params.DATA.VALUE.CALCULATED);
      
      if (this.params.DATA.DISABLED == "Y")
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text").addClass("ramform-text_disabled");
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").prop("disabled", true);
      }
      else
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text").removeClass("ramform-text_disabled");
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").prop("disabled", false);
      }
      
      if (this.params.DATA.READONLY == "Y")
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text").addClass("ramform-text_readonly");
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").prop("readonly", true);
      }
      else
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text").removeClass("ramform-text_readonly");
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").prop("readonly", false);
      }
      
      if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1)
      {
        var v = (this.params.DATA.VALUE.CALCULATED + "").substring(0, this.params.DATA.MAX_LENGTH);
        
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__counter").html(v.length + " / " + this.params.DATA.MAX_LENGTH);
      }
      
      if (this.params.ERROR == "VALIDATION_ERROR")
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__error").html(this.params.DATA.VALIDATION_ERROR);
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__helper").hide();
      }
      else
      {
        if (this.params.DATA.REQUIRED == "Y" && !start)
        {
          if ((this.params.DATA.VALUE.CALCULATED || "").length == 0)
          {
            this.params.ERROR = "EMPTY_ERROR";
            
            $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__error").html(this.params.DATA.EMPTY_ERROR);
            $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__helper").hide();
          }
          else
          {
            $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__error").html("");
          }
        }
        
        this.params.ERROR = this.params.ERROR || "";
        
        if (this.params.ERROR == "")
        {
          $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__error").html("");
        }
        
        if (this.params.DATA.HELPER.length && this.params.ERROR == "")
        {
          $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__helper").html(this.params.DATA.HELPER).show();
        }
      }
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e").addClass("ramform-item_required");
      }
      else
      {
        $("#crfi_88378a252dc566c6fa02e9b89034fa2e").removeClass("ramform-item_required");
      }
    }
  }
  
  var _crfi_88378a252dc566c6fa02e9b89034fa2e = new crfi_88378a252dc566c6fa02e9b89034fa2e({"ID":"51","FORM":"7","CODE":"1","SORT":"1","ITEM":"text","GROUP":"elements","NAME":"Имя","ACTIVE":"Y","TEMPLATE":"default","DATA":{"HIDDEN":"N","DISABLED":"N","READONLY":"N","REQUIRED":"Y","TITLE":"Имя","TITLE_HIDDEN":"Y","VALUE":{"SOURCE":""},"VALIDATION":"","MASK":"","MAX_LENGTH":"","HELPER":"","EMPTY_ERROR":"обязательно для заполнения","VALIDATION_ERROR":""},"_PATH":"/bitrix/components/ram/ram.form/items/elements/text/templates/default/","FIELDS":{"HIDDEN":{"TITLE":"Скрыть","TYPE":"checkbox"},"DISABLED":{"TITLE":"Отключить","TYPE":"checkbox"},"READONLY":{"TITLE":"Только для чтения","TYPE":"checkbox"},"REQUIRED":{"TITLE":"Обязательно для заполнения","TYPE":"checkbox"},"TITLE":{"TITLE":"Заголовок","TYPE":"text"},"TITLE_HIDDEN":{"TITLE":"Скрыть заголовок","TYPE":"checkbox"},"VALUE":{"TITLE":"Значение","TYPE":"select_text"},"VALIDATION":{"TITLE":"Проверка","TYPE":"select_text"},"MASK":{"TITLE":"Маска","TYPE":"select_text"},"MAX_LENGTH":{"TITLE":"Максимальное количество символов","TYPE":"text"},"HELPER":{"TITLE":"Подсказка (текст)","TYPE":"text"},"EMPTY_ERROR":{"TITLE":"Поле не заполнено (текст)","TYPE":"text"},"VALIDATION_ERROR":{"TITLE":"Данные введены неверно (текст)","TYPE":"text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_88378a252dc566c6fa02e9b89034fa2e"});
  
  $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-text__input").off().on("input", function(e)
  {
    if (_crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.MAX_LENGTH && _crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.MASK.length < 1)
    {
      var v = $(this).val().substring(0, _crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.MAX_LENGTH);
      
      $("#crfi_88378a252dc566c6fa02e9b89034fa2e .ramform-item__counter").html(v.length + " / " + _crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.MAX_LENGTH);
      
      $(this).val(v);
    }
  }).on("change, blur", function(e)
  {
    if (_crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.MASK.length)
    {
      if ($(this).inputmask("isComplete"))
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.VALUE.SOURCE}};
    
        _crfi_88378a252dc566c6fa02e9b89034fa2e.Change(data, e, $(this));
      }
      else if ($(this).val().length == 0)
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.VALUE.SOURCE}};
    
        _crfi_88378a252dc566c6fa02e9b89034fa2e.Change(data, e, $(this));
      }
    }
    else
    {
      var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_88378a252dc566c6fa02e9b89034fa2e.params.DATA.VALUE.SOURCE}};
    
      _crfi_88378a252dc566c6fa02e9b89034fa2e.Change(data, e, $(this));
    }
  });
});/* elements.text.default */

$(document).ready(function()
{
  class crfi_f4ac6a9bff78579e65c311a3f2f30b3f extends CRamFormItem
  {
    Start()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        
        data = _this.Validate(data);
    
        if (_this.Changes(data))
        {
          _this.Save(data);
          
          _this.Apply();
        
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
    }
    
    Init()
    {
      var _this = this;
      
      if (this.params.DATA.MASK.length)
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").inputmask(this.params.DATA.MASK, {greedy: false, showMaskOnHover: false});
      }
      
      var data = _this.Recalculate(null);
      
      if (_this.Changes(data))
      {
        _this.Save(data);
        
        _this.Apply(true);
      
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Data()
    {
      if (this.params.DATA.DISABLED == "Y")
      {
        return {};
      }
      
      var error = false;
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        var value = this.params.DATA.VALUE.CALCULATED || "";
        
        if (value.length == 0)
        {
          error = true;
          
          this.params.ERROR = "EMPTY_ERROR";
          
          this.Apply();
        }
        else if (this.params.DATA.MASK.length)
        {
          if (!$("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").inputmask("isComplete"))
          {
            var data = {VALUE: {CALCULATED: "", SOURCE: this.params.DATA.VALUE.SOURCE}};
    
            this.Change(data, null, "");
            
            error = true;
          }
        }
      }
      
      if (!error)
      {
        var data = {};
        
        for (var i in this.params.DATA)
        {
          var value = (this.params.DATA[i] != null && typeof this.params.DATA[i] === "object") ? this.params.DATA[i].CALCULATED : this.params.DATA[i];
          var title = this.params.FIELDS[i].TITLE;
          
          if (i == "VALUE")
          {
            title = this.params.NAME;
          }
          
          data["["+this.params.CODE+"."+i+"]"] = {VALUE: value, TITLE: title};
        }
        
        return data;
      }
      else
      {
        return false;
      }
    }
    
    Validate(data)
    {
      this.params.ERROR = "";
      
      if (this.params.DATA.VALIDATION.length && data.VALUE && data.VALUE.CALCULATED)
      {
        if ((data.VALUE.CALCULATED+"").search(this.params.DATA.VALIDATION) == -1)
        {
          data.VALUE.CALCULATED = "";
          
          this.params.ERROR = "VALIDATION_ERROR";
        }
      }
      else if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1 && data.VALUE && data.VALUE.CALCULATED)
      {
        data.VALUE.CALCULATED = (data.VALUE.CALCULATED+"").substring(0, this.params.DATA.MAX_LENGTH);
      }
      
      return data;
    }
    
    Apply(start)
    {
      start = start || false;
      
      if (this.params.DATA.HIDDEN == "Y")
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f").addClass("ramform-item_hidden");
      }
      else
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f").removeClass("ramform-item_hidden");
      }
      
      if (this.params.DATA.TITLE_HIDDEN == "Y")
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__title").addClass("ramform-item__title_hidden");
      }
      else
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__title").removeClass("ramform-item__title_hidden");
      }
      
      $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__title").html(this.params.DATA.TITLE);
      
      $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").val(this.params.DATA.VALUE.CALCULATED);
      
      if (this.params.DATA.DISABLED == "Y")
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text").addClass("ramform-text_disabled");
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").prop("disabled", true);
      }
      else
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text").removeClass("ramform-text_disabled");
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").prop("disabled", false);
      }
      
      if (this.params.DATA.READONLY == "Y")
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text").addClass("ramform-text_readonly");
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").prop("readonly", true);
      }
      else
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text").removeClass("ramform-text_readonly");
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").prop("readonly", false);
      }
      
      if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1)
      {
        var v = (this.params.DATA.VALUE.CALCULATED + "").substring(0, this.params.DATA.MAX_LENGTH);
        
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__counter").html(v.length + " / " + this.params.DATA.MAX_LENGTH);
      }
      
      if (this.params.ERROR == "VALIDATION_ERROR")
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__error").html(this.params.DATA.VALIDATION_ERROR);
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__helper").hide();
      }
      else
      {
        if (this.params.DATA.REQUIRED == "Y" && !start)
        {
          if ((this.params.DATA.VALUE.CALCULATED || "").length == 0)
          {
            this.params.ERROR = "EMPTY_ERROR";
            
            $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__error").html(this.params.DATA.EMPTY_ERROR);
            $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__helper").hide();
          }
          else
          {
            $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__error").html("");
          }
        }
        
        this.params.ERROR = this.params.ERROR || "";
        
        if (this.params.ERROR == "")
        {
          $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__error").html("");
        }
        
        if (this.params.DATA.HELPER.length && this.params.ERROR == "")
        {
          $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__helper").html(this.params.DATA.HELPER).show();
        }
      }
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f").addClass("ramform-item_required");
      }
      else
      {
        $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f").removeClass("ramform-item_required");
      }
    }
  }
  
  var _crfi_f4ac6a9bff78579e65c311a3f2f30b3f = new crfi_f4ac6a9bff78579e65c311a3f2f30b3f({"ID":"52","FORM":"7","CODE":"2","SORT":"2","ITEM":"text","GROUP":"elements","NAME":"Телефон","ACTIVE":"Y","TEMPLATE":"default","DATA":{"HIDDEN":"N","DISABLED":"N","READONLY":"N","REQUIRED":"Y","TITLE":"Телефон","TITLE_HIDDEN":"Y","VALUE":{"SOURCE":""},"VALIDATION":"","MASK":"","MAX_LENGTH":"","HELPER":"","EMPTY_ERROR":"обязательно для заполнения","VALIDATION_ERROR":""},"_PATH":"/bitrix/components/ram/ram.form/items/elements/text/templates/default/","FIELDS":{"HIDDEN":{"TITLE":"Скрыть","TYPE":"checkbox"},"DISABLED":{"TITLE":"Отключить","TYPE":"checkbox"},"READONLY":{"TITLE":"Только для чтения","TYPE":"checkbox"},"REQUIRED":{"TITLE":"Обязательно для заполнения","TYPE":"checkbox"},"TITLE":{"TITLE":"Заголовок","TYPE":"text"},"TITLE_HIDDEN":{"TITLE":"Скрыть заголовок","TYPE":"checkbox"},"VALUE":{"TITLE":"Значение","TYPE":"select_text"},"VALIDATION":{"TITLE":"Проверка","TYPE":"select_text"},"MASK":{"TITLE":"Маска","TYPE":"select_text"},"MAX_LENGTH":{"TITLE":"Максимальное количество символов","TYPE":"text"},"HELPER":{"TITLE":"Подсказка (текст)","TYPE":"text"},"EMPTY_ERROR":{"TITLE":"Поле не заполнено (текст)","TYPE":"text"},"VALIDATION_ERROR":{"TITLE":"Данные введены неверно (текст)","TYPE":"text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_f4ac6a9bff78579e65c311a3f2f30b3f"});
  
  $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-text__input").off().on("input", function(e)
  {
    if (_crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.MAX_LENGTH && _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.MASK.length < 1)
    {
      var v = $(this).val().substring(0, _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.MAX_LENGTH);
      
      $("#crfi_f4ac6a9bff78579e65c311a3f2f30b3f .ramform-item__counter").html(v.length + " / " + _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.MAX_LENGTH);
      
      $(this).val(v);
    }
  }).on("change, blur", function(e)
  {
    if (_crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.MASK.length)
    {
      if ($(this).inputmask("isComplete"))
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.VALUE.SOURCE}};
    
        _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.Change(data, e, $(this));
      }
      else if ($(this).val().length == 0)
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.VALUE.SOURCE}};
    
        _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.Change(data, e, $(this));
      }
    }
    else
    {
      var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.params.DATA.VALUE.SOURCE}};
    
      _crfi_f4ac6a9bff78579e65c311a3f2f30b3f.Change(data, e, $(this));
    }
  });
});/* elements.text.default */

$(document).ready(function()
{
  class crfi_59e53563b0bcc18b57ed7347aeb3fe3f extends CRamFormItem
  {
    Start()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        
        data = _this.Validate(data);
    
        if (_this.Changes(data))
        {
          _this.Save(data);
          
          _this.Apply();
        
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
    }
    
    Init()
    {
      var _this = this;
      
      if (this.params.DATA.MASK.length)
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").inputmask(this.params.DATA.MASK, {greedy: false, showMaskOnHover: false});
      }
      
      var data = _this.Recalculate(null);
      
      if (_this.Changes(data))
      {
        _this.Save(data);
        
        _this.Apply(true);
      
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Data()
    {
      if (this.params.DATA.DISABLED == "Y")
      {
        return {};
      }
      
      var error = false;
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        var value = this.params.DATA.VALUE.CALCULATED || "";
        
        if (value.length == 0)
        {
          error = true;
          
          this.params.ERROR = "EMPTY_ERROR";
          
          this.Apply();
        }
        else if (this.params.DATA.MASK.length)
        {
          if (!$("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").inputmask("isComplete"))
          {
            var data = {VALUE: {CALCULATED: "", SOURCE: this.params.DATA.VALUE.SOURCE}};
    
            this.Change(data, null, "");
            
            error = true;
          }
        }
      }
      
      if (!error)
      {
        var data = {};
        
        for (var i in this.params.DATA)
        {
          var value = (this.params.DATA[i] != null && typeof this.params.DATA[i] === "object") ? this.params.DATA[i].CALCULATED : this.params.DATA[i];
          var title = this.params.FIELDS[i].TITLE;
          
          if (i == "VALUE")
          {
            title = this.params.NAME;
          }
          
          data["["+this.params.CODE+"."+i+"]"] = {VALUE: value, TITLE: title};
        }
        
        return data;
      }
      else
      {
        return false;
      }
    }
    
    Validate(data)
    {
      this.params.ERROR = "";
      
      if (this.params.DATA.VALIDATION.length && data.VALUE && data.VALUE.CALCULATED)
      {
        if ((data.VALUE.CALCULATED+"").search(this.params.DATA.VALIDATION) == -1)
        {
          data.VALUE.CALCULATED = "";
          
          this.params.ERROR = "VALIDATION_ERROR";
        }
      }
      else if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1 && data.VALUE && data.VALUE.CALCULATED)
      {
        data.VALUE.CALCULATED = (data.VALUE.CALCULATED+"").substring(0, this.params.DATA.MAX_LENGTH);
      }
      
      return data;
    }
    
    Apply(start)
    {
      start = start || false;
      
      if (this.params.DATA.HIDDEN == "Y")
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f").addClass("ramform-item_hidden");
      }
      else
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f").removeClass("ramform-item_hidden");
      }
      
      if (this.params.DATA.TITLE_HIDDEN == "Y")
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__title").addClass("ramform-item__title_hidden");
      }
      else
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__title").removeClass("ramform-item__title_hidden");
      }
      
      $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__title").html(this.params.DATA.TITLE);
      
      $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").val(this.params.DATA.VALUE.CALCULATED);
      
      if (this.params.DATA.DISABLED == "Y")
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text").addClass("ramform-text_disabled");
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").prop("disabled", true);
      }
      else
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text").removeClass("ramform-text_disabled");
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").prop("disabled", false);
      }
      
      if (this.params.DATA.READONLY == "Y")
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text").addClass("ramform-text_readonly");
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").prop("readonly", true);
      }
      else
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text").removeClass("ramform-text_readonly");
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").prop("readonly", false);
      }
      
      if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1)
      {
        var v = (this.params.DATA.VALUE.CALCULATED + "").substring(0, this.params.DATA.MAX_LENGTH);
        
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__counter").html(v.length + " / " + this.params.DATA.MAX_LENGTH);
      }
      
      if (this.params.ERROR == "VALIDATION_ERROR")
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__error").html(this.params.DATA.VALIDATION_ERROR);
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__helper").hide();
      }
      else
      {
        if (this.params.DATA.REQUIRED == "Y" && !start)
        {
          if ((this.params.DATA.VALUE.CALCULATED || "").length == 0)
          {
            this.params.ERROR = "EMPTY_ERROR";
            
            $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__error").html(this.params.DATA.EMPTY_ERROR);
            $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__helper").hide();
          }
          else
          {
            $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__error").html("");
          }
        }
        
        this.params.ERROR = this.params.ERROR || "";
        
        if (this.params.ERROR == "")
        {
          $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__error").html("");
        }
        
        if (this.params.DATA.HELPER.length && this.params.ERROR == "")
        {
          $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__helper").html(this.params.DATA.HELPER).show();
        }
      }
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f").addClass("ramform-item_required");
      }
      else
      {
        $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f").removeClass("ramform-item_required");
      }
    }
  }
  
  var _crfi_59e53563b0bcc18b57ed7347aeb3fe3f = new crfi_59e53563b0bcc18b57ed7347aeb3fe3f({"ID":"53","FORM":"7","CODE":"13","SORT":"3","ITEM":"text","GROUP":"elements","NAME":"Email","ACTIVE":"Y","TEMPLATE":"default","DATA":{"HIDDEN":"N","DISABLED":"N","READONLY":"N","REQUIRED":"Y","TITLE":"Email","TITLE_HIDDEN":"Y","VALUE":{"SOURCE":""},"VALIDATION":"^(([^<>()[\\]\\.,;:\\s@\"]+(\\.[^<>()[\\]\\.,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\]\\.,;:\\s@\"]+\\.)+[^<>()[\\]\\.,;:\\s@\"]{2,})$","MASK":"","MAX_LENGTH":"","HELPER":"","EMPTY_ERROR":"обязательно для заполнения","VALIDATION_ERROR":""},"_PATH":"/bitrix/components/ram/ram.form/items/elements/text/templates/default/","FIELDS":{"HIDDEN":{"TITLE":"Скрыть","TYPE":"checkbox"},"DISABLED":{"TITLE":"Отключить","TYPE":"checkbox"},"READONLY":{"TITLE":"Только для чтения","TYPE":"checkbox"},"REQUIRED":{"TITLE":"Обязательно для заполнения","TYPE":"checkbox"},"TITLE":{"TITLE":"Заголовок","TYPE":"text"},"TITLE_HIDDEN":{"TITLE":"Скрыть заголовок","TYPE":"checkbox"},"VALUE":{"TITLE":"Значение","TYPE":"select_text"},"VALIDATION":{"TITLE":"Проверка","TYPE":"select_text"},"MASK":{"TITLE":"Маска","TYPE":"select_text"},"MAX_LENGTH":{"TITLE":"Максимальное количество символов","TYPE":"text"},"HELPER":{"TITLE":"Подсказка (текст)","TYPE":"text"},"EMPTY_ERROR":{"TITLE":"Поле не заполнено (текст)","TYPE":"text"},"VALIDATION_ERROR":{"TITLE":"Данные введены неверно (текст)","TYPE":"text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_59e53563b0bcc18b57ed7347aeb3fe3f"});
  
  $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-text__input").off().on("input", function(e)
  {
    if (_crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.MAX_LENGTH && _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.MASK.length < 1)
    {
      var v = $(this).val().substring(0, _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.MAX_LENGTH);
      
      $("#crfi_59e53563b0bcc18b57ed7347aeb3fe3f .ramform-item__counter").html(v.length + " / " + _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.MAX_LENGTH);
      
      $(this).val(v);
    }
  }).on("change, blur", function(e)
  {
    if (_crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.MASK.length)
    {
      if ($(this).inputmask("isComplete"))
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.VALUE.SOURCE}};
    
        _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.Change(data, e, $(this));
      }
      else if ($(this).val().length == 0)
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.VALUE.SOURCE}};
    
        _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.Change(data, e, $(this));
      }
    }
    else
    {
      var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.params.DATA.VALUE.SOURCE}};
    
      _crfi_59e53563b0bcc18b57ed7347aeb3fe3f.Change(data, e, $(this));
    }
  });
});/* elements.text.default */

$(document).ready(function()
{
  class crfi_17d857cc6ffc5d7d1f97d94897ba2d6c extends CRamFormItem
  {
    Start()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        
        data = _this.Validate(data);
    
        if (_this.Changes(data))
        {
          _this.Save(data);
          
          _this.Apply();
        
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
    }
    
    Init()
    {
      var _this = this;
      
      if (this.params.DATA.MASK.length)
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").inputmask(this.params.DATA.MASK, {greedy: false, showMaskOnHover: false});
      }
      
      var data = _this.Recalculate(null);
      
      if (_this.Changes(data))
      {
        _this.Save(data);
        
        _this.Apply(true);
      
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Data()
    {
      if (this.params.DATA.DISABLED == "Y")
      {
        return {};
      }
      
      var error = false;
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        var value = this.params.DATA.VALUE.CALCULATED || "";
        
        if (value.length == 0)
        {
          error = true;
          
          this.params.ERROR = "EMPTY_ERROR";
          
          this.Apply();
        }
        else if (this.params.DATA.MASK.length)
        {
          if (!$("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").inputmask("isComplete"))
          {
            var data = {VALUE: {CALCULATED: "", SOURCE: this.params.DATA.VALUE.SOURCE}};
    
            this.Change(data, null, "");
            
            error = true;
          }
        }
      }
      
      if (!error)
      {
        var data = {};
        
        for (var i in this.params.DATA)
        {
          var value = (this.params.DATA[i] != null && typeof this.params.DATA[i] === "object") ? this.params.DATA[i].CALCULATED : this.params.DATA[i];
          var title = this.params.FIELDS[i].TITLE;
          
          if (i == "VALUE")
          {
            title = this.params.NAME;
          }
          
          data["["+this.params.CODE+"."+i+"]"] = {VALUE: value, TITLE: title};
        }
        
        return data;
      }
      else
      {
        return false;
      }
    }
    
    Validate(data)
    {
      this.params.ERROR = "";
      
      if (this.params.DATA.VALIDATION.length && data.VALUE && data.VALUE.CALCULATED)
      {
        if ((data.VALUE.CALCULATED+"").search(this.params.DATA.VALIDATION) == -1)
        {
          data.VALUE.CALCULATED = "";
          
          this.params.ERROR = "VALIDATION_ERROR";
        }
      }
      else if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1 && data.VALUE && data.VALUE.CALCULATED)
      {
        data.VALUE.CALCULATED = (data.VALUE.CALCULATED+"").substring(0, this.params.DATA.MAX_LENGTH);
      }
      
      return data;
    }
    
    Apply(start)
    {
      start = start || false;
      
      if (this.params.DATA.HIDDEN == "Y")
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c").addClass("ramform-item_hidden");
      }
      else
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c").removeClass("ramform-item_hidden");
      }
      
      if (this.params.DATA.TITLE_HIDDEN == "Y")
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__title").addClass("ramform-item__title_hidden");
      }
      else
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__title").removeClass("ramform-item__title_hidden");
      }
      
      $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__title").html(this.params.DATA.TITLE);
      
      $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").val(this.params.DATA.VALUE.CALCULATED);
      
      if (this.params.DATA.DISABLED == "Y")
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text").addClass("ramform-text_disabled");
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").prop("disabled", true);
      }
      else
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text").removeClass("ramform-text_disabled");
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").prop("disabled", false);
      }
      
      if (this.params.DATA.READONLY == "Y")
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text").addClass("ramform-text_readonly");
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").prop("readonly", true);
      }
      else
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text").removeClass("ramform-text_readonly");
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").prop("readonly", false);
      }
      
      if (this.params.DATA.MAX_LENGTH && this.params.DATA.MASK.length < 1)
      {
        var v = (this.params.DATA.VALUE.CALCULATED + "").substring(0, this.params.DATA.MAX_LENGTH);
        
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__counter").html(v.length + " / " + this.params.DATA.MAX_LENGTH);
      }
      
      if (this.params.ERROR == "VALIDATION_ERROR")
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__error").html(this.params.DATA.VALIDATION_ERROR);
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__helper").hide();
      }
      else
      {
        if (this.params.DATA.REQUIRED == "Y" && !start)
        {
          if ((this.params.DATA.VALUE.CALCULATED || "").length == 0)
          {
            this.params.ERROR = "EMPTY_ERROR";
            
            $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__error").html(this.params.DATA.EMPTY_ERROR);
            $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__helper").hide();
          }
          else
          {
            $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__error").html("");
          }
        }
        
        this.params.ERROR = this.params.ERROR || "";
        
        if (this.params.ERROR == "")
        {
          $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__error").html("");
        }
        
        if (this.params.DATA.HELPER.length && this.params.ERROR == "")
        {
          $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__helper").html(this.params.DATA.HELPER).show();
        }
      }
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c").addClass("ramform-item_required");
      }
      else
      {
        $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c").removeClass("ramform-item_required");
      }
    }
  }
  
  var _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c = new crfi_17d857cc6ffc5d7d1f97d94897ba2d6c({"ID":"54","FORM":"7","CODE":"12","SORT":"4","ITEM":"text","GROUP":"elements","NAME":"Тема","ACTIVE":"Y","TEMPLATE":"default","DATA":{"HIDDEN":"N","DISABLED":"N","READONLY":"N","REQUIRED":"N","TITLE":"Тема обращения","TITLE_HIDDEN":"Y","VALUE":{"SOURCE":""},"VALIDATION":"","MASK":"","MAX_LENGTH":"","HELPER":"","EMPTY_ERROR":"","VALIDATION_ERROR":""},"_PATH":"/bitrix/components/ram/ram.form/items/elements/text/templates/default/","FIELDS":{"HIDDEN":{"TITLE":"Скрыть","TYPE":"checkbox"},"DISABLED":{"TITLE":"Отключить","TYPE":"checkbox"},"READONLY":{"TITLE":"Только для чтения","TYPE":"checkbox"},"REQUIRED":{"TITLE":"Обязательно для заполнения","TYPE":"checkbox"},"TITLE":{"TITLE":"Заголовок","TYPE":"text"},"TITLE_HIDDEN":{"TITLE":"Скрыть заголовок","TYPE":"checkbox"},"VALUE":{"TITLE":"Значение","TYPE":"select_text"},"VALIDATION":{"TITLE":"Проверка","TYPE":"select_text"},"MASK":{"TITLE":"Маска","TYPE":"select_text"},"MAX_LENGTH":{"TITLE":"Максимальное количество символов","TYPE":"text"},"HELPER":{"TITLE":"Подсказка (текст)","TYPE":"text"},"EMPTY_ERROR":{"TITLE":"Поле не заполнено (текст)","TYPE":"text"},"VALIDATION_ERROR":{"TITLE":"Данные введены неверно (текст)","TYPE":"text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_17d857cc6ffc5d7d1f97d94897ba2d6c"});
  
  $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-text__input").off().on("input", function(e)
  {
    if (_crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.MAX_LENGTH && _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.MASK.length < 1)
    {
      var v = $(this).val().substring(0, _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.MAX_LENGTH);
      
      $("#crfi_17d857cc6ffc5d7d1f97d94897ba2d6c .ramform-item__counter").html(v.length + " / " + _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.MAX_LENGTH);
      
      $(this).val(v);
    }
  }).on("change, blur", function(e)
  {
    if (_crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.MASK.length)
    {
      if ($(this).inputmask("isComplete"))
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.VALUE.SOURCE}};
    
        _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.Change(data, e, $(this));
      }
      else if ($(this).val().length == 0)
      {
        var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.VALUE.SOURCE}};
    
        _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.Change(data, e, $(this));
      }
    }
    else
    {
      var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.params.DATA.VALUE.SOURCE}};
    
      _crfi_17d857cc6ffc5d7d1f97d94897ba2d6c.Change(data, e, $(this));
    }
  });
});/* elements.text.textarea */

$(document).ready(function()
{
  class crfi_1beae004a4cea60be3c7c13587cee4fe extends CRamFormItem
  {
    Start()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        
        data = _this.Validate(data);
    
        if (_this.Changes(data))
        {
          _this.Save(data);
          
          _this.Apply();
        
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
    }
    
    Init()
    {
      var _this = this;
      
      var data = _this.Recalculate(null);
    
      if (_this.Changes(data))
      {
        _this.Save(data);
        
        _this.Apply();
      
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Data()
    {
      if (this.params.DATA.DISABLED == "Y")
      {
        return {};
      }
      
      var error = false;
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        var value = this.params.DATA.VALUE.CALCULATED || "";
        
        if (value.length == 0)
        {
          error = true;
          
          this.params.ERROR = "EMPTY_ERROR";
          
          this.Apply();
        }
      }
      
      if (!error)
      {
        var data = {};
        
        for (var i in this.params.DATA)
        {
          var value = (this.params.DATA[i] != null && typeof this.params.DATA[i] === "object") ? this.params.DATA[i].CALCULATED : this.params.DATA[i];
          var title = this.params.FIELDS[i].TITLE;
          
          if (i == "VALUE")
          {
            title = this.params.NAME;
          }
          
          data["["+this.params.CODE+"."+i+"]"] = {VALUE: value, TITLE: title};
        }
        
        return data;
      }
      else
      {
        return false;
      }
    }
    
    Validate(data)
    {
      if (this.params.DATA.MAX_LENGTH && data.VALUE && data.VALUE.CALCULATED)
      {
        data.VALUE.CALCULATED = (data.VALUE.CALCULATED+"").substring(0, this.params.DATA.MAX_LENGTH);
      }
      
      return data;
    }
    
    Apply(start)
    {
      start = start || false;
      
      if (this.params.DATA.HIDDEN == "Y")
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe").addClass("ramform-item_hidden");
      }
      else
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe").removeClass("ramform-item_hidden");
      }
      
      if (this.params.DATA.TITLE_HIDDEN == "Y")
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__title").addClass("ramform-item__title_hidden");
      }
      else
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__title").removeClass("ramform-item__title_hidden");
      }
      
      $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__title").html(this.params.DATA.TITLE);
      
      $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea__input").val(this.params.DATA.VALUE.CALCULATED || "");
      
      if (this.params.DATA.DISABLED == "Y")
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea").addClass("ramform-textarea_disabled");
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea__input").prop("disabled", true);
      }
      else
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea").removeClass("ramform-textarea_disabled");
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea__input").prop("disabled", false);
      }
      
      if (this.params.DATA.READONLY == "Y")
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea").addClass("ramform-textarea_readonly");
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea__input").prop("readonly", true);
      }
      else
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea").removeClass("ramform-textarea_readonly");
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea__input").prop("readonly", false);
      }
      
      if (this.params.DATA.MAX_LENGTH)
      {
        var v = (this.params.DATA.VALUE.CALCULATED || "").substring(0, this.params.DATA.MAX_LENGTH);
        
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__counter").html(v.length + " / " + this.params.DATA.MAX_LENGTH);
      }
      
      if (this.params.DATA.REQUIRED == "Y" && !start)
      {
        if ((this.params.DATA.VALUE.CALCULATED || "").length == 0)
        {
          this.params.ERROR = "EMPTY_ERROR";
          
          $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__error").html(this.params.DATA.EMPTY_ERROR);
          $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__helper").hide();
        }
        else
        {
          $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__error").html("");
        }
      }
        
      this.params.ERROR = this.params.ERROR || "";
      
      if (this.params.DATA.HELPER.length && this.params.ERROR == "")
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__helper").html(this.params.DATA.HELPER).show();
      }
      
      if (this.params.DATA.REQUIRED == "Y")
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe").addClass("ramform-item_required");
      }
      else
      {
        $("#crfi_1beae004a4cea60be3c7c13587cee4fe").removeClass("ramform-item_required");
      }
    }
  }
  
  var _crfi_1beae004a4cea60be3c7c13587cee4fe = new crfi_1beae004a4cea60be3c7c13587cee4fe({"ID":"55","FORM":"7","CODE":"3","SORT":"5","ITEM":"text","GROUP":"elements","NAME":"Сообщение","ACTIVE":"Y","TEMPLATE":"textarea","DATA":{"HIDDEN":"N","DISABLED":"N","READONLY":"N","REQUIRED":"Y","TITLE":"Ваше сообщение","TITLE_HIDDEN":"Y","VALUE":{"SOURCE":""},"MAX_LENGTH":"","HELPER":"","EMPTY_ERROR":"обязательно для заполнения","VALIDATION_ERROR":""},"_PATH":"/bitrix/components/ram/ram.form/items/elements/text/templates/textarea/","FIELDS":{"HIDDEN":{"TITLE":"Скрыть","TYPE":"checkbox"},"DISABLED":{"TITLE":"Отключить","TYPE":"checkbox"},"READONLY":{"TITLE":"Только для чтения","TYPE":"checkbox"},"REQUIRED":{"TITLE":"Обязательно для заполнения","TYPE":"checkbox"},"TITLE":{"TITLE":"Заголовок","TYPE":"text"},"TITLE_HIDDEN":{"TITLE":"Скрыть заголовок","TYPE":"checkbox"},"VALUE":{"TITLE":"Значение","TYPE":"select_text"},"MAX_LENGTH":{"TITLE":"Максимальное количество символов","TYPE":"text"},"HELPER":{"TITLE":"Подсказка (текст)","TYPE":"text"},"EMPTY_ERROR":{"TITLE":"Поле не заполнено (текст)","TYPE":"text"},"VALIDATION_ERROR":{"TITLE":"Данные введены неверно (текст)","TYPE":"text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_1beae004a4cea60be3c7c13587cee4fe"});
  
  $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-textarea__input").off().on("input", function(e)
  {
    if (_crfi_1beae004a4cea60be3c7c13587cee4fe.params.DATA.MAX_LENGTH)
    {
      var v = $(this).val().substring(0, _crfi_1beae004a4cea60be3c7c13587cee4fe.params.DATA.MAX_LENGTH);
      
      $("#crfi_1beae004a4cea60be3c7c13587cee4fe .ramform-item__counter").html(v.length + " / " + _crfi_1beae004a4cea60be3c7c13587cee4fe.params.DATA.MAX_LENGTH);
      
      $(this).val(v);
    }
    
    var ta = $("<div class='ramform-textarea__size' contenteditable='true'>"+$(this).val().replace(/\n/g, "<br/>&nbsp;")+"</div>");
    $(this).parent().append($(ta));
    $(this).css("height", $(ta).height());
    $(this).parent().find(".ramform-textarea__size").remove();
  }).on("change, blur", function(e)
  {
    var data = {VALUE: {CALCULATED: $(this).val(), SOURCE: _crfi_1beae004a4cea60be3c7c13587cee4fe.params.DATA.VALUE.SOURCE}};
    
    _crfi_1beae004a4cea60be3c7c13587cee4fe.Change(data, e, $(this));
  });
});/* elements.button.default */

$(document).ready(function()
{
  class crfi_190959c2ab2f09c8c8c2c491fc6ce235 extends CRamFormItem
  {
    Apply()
    {
      if (this.params.DATA.HIDDEN == "Y")
      {
        $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235").addClass("ramform-item_hidden");
      }
      else
      {
        $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235").removeClass("ramform-item_hidden");
      }
      
      $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235 .ramform-button__title").html(this.params.DATA.TITLE);
      
      if (this.params.DATA.DISABLED == "Y")
      {
        $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235 .ramform-button").addClass("ramform-button_disabled");
        $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235 .ramform-button").prop("disabled", true);
      }
      else
      {
        $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235 .ramform-button").removeClass("ramform-button_disabled");
        $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235 .ramform-button").prop("disabled", false);
      }
    }
  }
  
  var _crfi_190959c2ab2f09c8c8c2c491fc6ce235 = new crfi_190959c2ab2f09c8c8c2c491fc6ce235({"ID":"56","FORM":"7","CODE":"4","SORT":"6","ITEM":"button","GROUP":"elements","NAME":"Кнопка","ACTIVE":"Y","TEMPLATE":"default","DATA":{"HIDDEN":"N","DISABLED":"N","TITLE":"Отправить","ACTION":"SUBMIT"},"_PATH":"/bitrix/components/ram/ram.form/items/elements/button/templates/default/","FIELDS":{"HIDDEN":{"TITLE":"Скрыть","TYPE":"checkbox"},"DISABLED":{"TITLE":"Отключить","TYPE":"checkbox"},"TITLE":{"TITLE":"Текст","TYPE":"text"},"ACTION":{"TITLE":"Действие","TYPE":"select"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_190959c2ab2f09c8c8c2c491fc6ce235"});
  
  $("#crfi_190959c2ab2f09c8c8c2c491fc6ce235 .ramform-button").off().on("click", function(e)
  {
    switch (_crfi_190959c2ab2f09c8c8c2c491fc6ce235.params.DATA.ACTION)
    {
      case "SUBMIT":
      {
        _crfi_190959c2ab2f09c8c8c2c491fc6ce235.Fire("onFormSubmit");
        
        break;
      }
    }
  });
});/* result.email */

$(document).ready(function()
{
  class crfi_0573efe2e6c0ffb338537b7b31cf07f7 extends CRamFormItem
  {
    Init()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        if (_this.Changes(data))
        {
          _this.Save(data);
          _this.Apply();
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
      
      var data = _this.Recalculate(null);
      if (_this.Changes(data))
      {
        _this.Save(data);
        _this.Apply();
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Result(data)
    {
      var _this = this;
      
      var sendData = "";
      
      for (var i in this.params.DATA.FIELDS)
      {
        if (data[this.params.DATA.FIELDS[i]])
        {
          sendData += data[this.params.DATA.FIELDS[i]].TITLE + ": " + (data[this.params.DATA.FIELDS[i]].VALUE || "") + "\n";
        }
      }
      
      var message = this.params.DATA.MESSAGE.split(".");
      var lid = message[1];
      message = message[0];
      
      $.ajax(
      {
        method: "POST",
        url: this.params._PATH+"data.php",
        data:
        {
          TEXT: sendData,
          EMAIL: this.params.DATA.EMAIL.CALCULATED,
          MESSAGE: message,
          SUBJECT: this.params.DATA.SUBJECT,
          LID: lid,
        }
      }).done(function(response)
      {
        _this.Fire("onAfterFormItemResult");
      });
    }
  }
  
  var _crfi_0573efe2e6c0ffb338537b7b31cf07f7 = new crfi_0573efe2e6c0ffb338537b7b31cf07f7({"ID":"57","FORM":"7","CODE":"5","SORT":"0","ITEM":"email","GROUP":"results","NAME":"На почту","ACTIVE":"Y","TEMPLATE":null,"DATA":{"EMAIL":{"SOURCE":"rikta@rikta.ru"},"MESSAGE":"151.s1","SUBJECT":"Обращение со страницы контактов","FIELDS":["[1.VALUE]","[2.VALUE]","[3.VALUE]"]},"_PATH":"/bitrix/components/ram/ram.form/items/results/email/","FIELDS":{"EMAIL":{"TITLE":"E-mail","TYPE":"select_text"},"MESSAGE":{"TITLE":"Шаблон сообщения","TYPE":"select"},"SUBJECT":{"TITLE":"Тема письма","TYPE":"text"},"FIELDS":{"TITLE":"Данные для отправки","TYPE":"select_text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_0573efe2e6c0ffb338537b7b31cf07f7"});
});/* results.iblock */

$(document).ready(function()
{
  class crfi_00d7b34355d601ab62be80d68c984102 extends CRamFormItem
  {
    Init()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        if (_this.Changes(data))
        {
          _this.Save(data);
          _this.Apply();
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
      
      var data = _this.Recalculate(null);
      if (_this.Changes(data))
      {
        _this.Save(data);
        _this.Apply();
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Result(data)
    {
      var _this = this;
      
      var sendData = [];
      
      for (var i in this.params.DATA.FIELDS)
      {
        if (data[this.params.DATA.FIELDS[i]])
        {
          var f = this.params.DATA.FIELDS[i].replace("[", "").replace("]", "").split(".");
          
          var v = data[this.params.DATA.FIELDS[i]];
          
          sendData.push({"CODE": f[0]+"_"+f[1], "NAME": data[this.params.DATA.FIELDS[i]].TITLE, "VALUE": v.VALUE});
        }
      }
      
      $.ajax(
      {
        method: "POST",
        url: this.params._PATH+"data.php",
        data:
        {
          IBLOCK: this.params.DATA.IBLOCK,
          NAME: this.params.DATA.NAME.CALCULATED,
          FIELDS: sendData,
        }
      }).done(function(response)
      {
        _this.Fire("onAfterFormItemResult");
      });
    }
  }
  
  var _crfi_00d7b34355d601ab62be80d68c984102 = new crfi_00d7b34355d601ab62be80d68c984102({"ID":"58","FORM":"7","CODE":"6","SORT":"1","ITEM":"iblock","GROUP":"results","NAME":"В инфоблок","ACTIVE":"Y","TEMPLATE":null,"DATA":{"IBLOCK":"36","NAME":{"SOURCE":"[1.VALUE]"},"FIELDS":["[1.VALUE]","[2.VALUE]","[3.VALUE]"]},"_PATH":"/bitrix/components/ram/ram.form/items/results/iblock/","FIELDS":{"IBLOCK":{"TITLE":"Инфоблок для хранения элемента","TYPE":"select"},"NAME":{"TITLE":"Название элемента","TYPE":"select_text"},"FIELDS":{"TITLE":"Данные элемента","TYPE":"select_text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_00d7b34355d601ab62be80d68c984102"});
});/* result.javascript */

$(document).ready(function()
{
  class crfi_fe6391f70a1a7dfa1af85d40905501ef extends CRamFormItem
  {
    Init()
    {
      var _this = this;
      
      this.AddListener("onFormItemChange", function(e)
      {
        var data = _this.Recalculate({item: e.data.item});
        if (_this.Changes(data))
        {
          _this.Save(data);
          _this.Apply();
          _this.Fire("onFormItemChange", {item: _this.params.CODE});
        }
        
        return e;
      });
      
      var data = _this.Recalculate(null);
      if (_this.Changes(data))
      {
        _this.Save(data);
        _this.Apply();
        _this.Fire("onFormItemChange", {item: _this.params.CODE});
      }
    }
    
    Result(data)
    {
      var _this = this;
      
      var sendData = {};
      
      for (var i in this.params.DATA.FIELDS)
      {
        if (data[this.params.DATA.FIELDS[i]])
        {
          var f = this.params.DATA.FIELDS[i];
          var v = data[this.params.DATA.FIELDS[i]];
          
          f = f.replace("[", "").replace("]", "").split(".");
          
          if (!sendData[f[0]])
          {
            sendData[f[0]] = {};
          }
          
          sendData[f[0]][f[1]] = v.VALUE;
        }
      }
      
      try
      {
        window[_this.params.DATA.FUNCTION](sendData);
        
        _this.Fire("onAfterFormItemResult");
      }
      catch (error)
      {
        CRamForms.ShowPopup(
        {
          wrapper: _this.params.FORM_UID,
          content: "<div class='ramform-textblock'><p style='text-align: center;'>"+error+"</p></div>",
        });
      }
    }
  }
  
  var _crfi_fe6391f70a1a7dfa1af85d40905501ef = new crfi_fe6391f70a1a7dfa1af85d40905501ef({"ID":"59","FORM":"7","CODE":"7","SORT":"2","ITEM":"javascript","GROUP":"results","NAME":"Javascript","ACTIVE":"Y","TEMPLATE":null,"DATA":{"FUNCTION":"AskFormGoal"},"_PATH":"/bitrix/components/ram/ram.form/items/results/javascript/","FIELDS":{"FUNCTION":{"TITLE":"Функция","TYPE":"text"},"FIELDS":{"TITLE":"Данные для отправки","TYPE":"select_text"}},"FORM_UID":"crf_131bd3e56e4c2d0ec1d0c0f0679fa1e5","UID":"crfi_fe6391f70a1a7dfa1af85d40905501ef"});
});</script>