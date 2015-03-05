var React = require('react');
var CodeEditor = require('../components/CodeEditor');


var view = `
var View = Backbone.View.extend({
  template: Template,

  render() {
    var data = this.collection.map((model) => {
      var itemClass (model.get('isFlaged'))
        ? 'important'
        : '';

      return {
        item: model.get('name'),
        itemClass: itemClass
      };
    });

    var html = this.template(data);
    this.$el.html(html);
  }
});
`;

var template = `
<ul>
{{#each}}
  <li class={{itemClass}}>
    {{item}}
  </li>
{{/each}}
</ul>
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Templates and Views</h2>

                <div className="row">
                    <div className="col-xs-4">
                        Handlebars
                    </div>
                    <div className="col-xs-8">
                        Backbone View
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <CodeEditor language="handlebars" codeText={template} />
                    </div>
                    <div className="col-xs-8">
                        <CodeEditor language="javascript" codeText={view} />
                    </div>
                </div>
            </section>
        );
    }
});