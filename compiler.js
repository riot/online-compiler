export default {
  css: `compiler main,[is="compiler"] main{ display: flex; height: 100vh; flex-direction: column; margin-left: 0; margin-right: 0; padding-bottom: 6px; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; } compiler .editors,[is="compiler"] .editors{ display: flex; flex: 1 1 100%; } compiler .input,[is="compiler"] .input,compiler .output,[is="compiler"] .output{ margin-bottom: 1.2rem; width: 50%; } compiler header,[is="compiler"] header{ display: flex; justify-content: space-between; background: #fb0d48; padding: 1rem 1.2rem; } compiler h1,[is="compiler"] h1{ color:white; margin: 0; } compiler button,[is="compiler"] button{ background: #222; border: none; font-weight: 600; text-transform: uppercase; color: white; padding: 0.4rem 1rem; border-radius: 0.4rem; text-align: center; text-decoration: none; display: inline-block; font-size: 18px; cursor: pointer; } compiler footer,[is="compiler"] footer{ margin: auto 0 0; } compiler small,[is="compiler"] small{ width: 100%; padding: 0.6rem 1.2rem; display: inline-block; text-align: right; } compiler small a,[is="compiler"] small a{ color: #fb0d48; }`,

  exports: {
    state: {
      result: ''
    },

    compile(event) {

      this.output.setValue(
        compiler.compile(this.input.getValue()).code
      )
    },

    onMounted() {
      this.input = ace.edit(this.$('.input'));
      this.input.setTheme('ace/theme/github');
      this.input.session.setMode('ace/mode/html');

      this.output = ace.edit(this.$('.output'))
      this.output.setTheme('ace/theme/github');
      this.output.session.setMode('ace/mode/javascript');
    }
  },

  template: (
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) => template(
    '<main><header><h1>Riot.js Online Compiler</h1><button expr0="expr0">compile</button></header><div class="editors"><div class="input">&lt;my-tag&gt;\n  &lt;p&gt;Hello&lt;/p&gt;\n&lt;/my-tag&gt;</div><div class="output"></div></div><footer><small>Made with <a href="http://riot.js.org">Riot.js</a></small></footer></main>',
    [
      {
        redundantAttribute: 'expr0',
        selector: '[expr0]',

        expressions: [
          {
            type: expressionTypes.EVENT,
            name: 'onclick',
            evaluate: _scope => _scope.compile
          }
        ]
      }
    ]
  ),

  name: 'compiler'
};