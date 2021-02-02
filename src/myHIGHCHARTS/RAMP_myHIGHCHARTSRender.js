function RAMP_myHIGHCHARTS($) {

  this.Height;

  this.show = function() {
    if (!this.IsPostback) {
      let template = '<div id="{{id}}" style="width:100%;height:{{height}};"></div>';
      let html = '';
      if (Mustache) {
        let data = {
          id: this.ControlName + this.ControlId + '_MainContainer',
          height: this.Height
        };
        html = Mustache.to_html(template, data);
      } else {
        html = template;
        html = template.replace('{{id}}', this.ControlName + this.ControlId + '_MainContainer');
        html = template.replace('{{height}}', this.Height);
      }
      this.setHtml(html);
    }
  }

  this.refresh = function(config, tc) {
    let json = gx.json.evalJSON(config);
    let dom = gx.dom.byId(this.ControlName + this.ControlId + '_MainContainer');
    $(dom).highcharts(tc, json);
  }
}
