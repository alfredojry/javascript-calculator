var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // React
var
BasicCalculator = function (_React$Component) {_inherits(BasicCalculator, _React$Component);
  function BasicCalculator(props) {_classCallCheck(this, BasicCalculator);var _this = _possibleConstructorReturn(this, (BasicCalculator.__proto__ || Object.getPrototypeOf(BasicCalculator)).call(this,
    props));
    _this.state = {
      input: '',
      display: '0',
      flagNew: false };

    _this.handleClear = _this.handleClear.bind(_this);
    _this.handleSqRoot = _this.handleSqRoot.bind(_this);
    _this.handlePercentage = _this.handlePercentage.bind(_this);
    _this.handleDivide = _this.handleDivide.bind(_this);
    _this.handleMultiply = _this.handleMultiply.bind(_this);
    _this.handleSubtract = _this.handleSubtract.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handleEquals = _this.handleEquals.bind(_this);
    _this.handleDecimal = _this.handleDecimal.bind(_this);
    _this.handleNine = _this.handleNine.bind(_this);
    _this.handleEight = _this.handleEight.bind(_this);
    _this.handleSeven = _this.handleSeven.bind(_this);
    _this.handleSix = _this.handleSix.bind(_this);
    _this.handleFive = _this.handleFive.bind(_this);
    _this.handleFour = _this.handleFour.bind(_this);
    _this.handleThree = _this.handleThree.bind(_this);
    _this.handleTwo = _this.handleTwo.bind(_this);
    _this.handleOne = _this.handleOne.bind(_this);
    _this.handleZero = _this.handleZero.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleBasicOperator = _this.handleBasicOperator.bind(_this);
    _this.handleNatural = _this.handleNatural.bind(_this);return _this;
  }_createClass(BasicCalculator, [{ key: 'handleClear', value: function handleClear()
    {
      this.setState({
        display: '0',
        input: '',
        flagNew: false });

    } }, { key: 'handleBasicOperator', value: function handleBasicOperator(

    oper) {
      if (this.state.flagNew) {
        this.setState({
          input: this.state.display.toString() + oper,
          display: oper,
          flagNew: false });

      } else
      if (/^\u23B7*\d+\.*\d*%*$|^\d+\u23B7+\d+%*$/.test(this.state.display) && this.state.display !== '0' && !/\d\.$/.test(this.state.display)) {
        this.setState({
          input: this.state.input.concat(this.state.display + oper) });

        this.setState({
          display: oper
          //input: this.state.input.concat(oper)
        });
      } else if (/[\+\-×÷\u23B7]$/.test(this.state.display) && /[\+\-×÷]$/.test(this.state.input)) {
        this.setState({
          display: oper,
          input: this.state.input.slice(0, this.state.input.length - 1).concat(oper) });

      }
    } }, { key: 'handleNatural', value: function handleNatural(

    num) {
      if (this.state.flagNew) {
        this.setState({
          display: num,
          input: '',
          flagNew: false });

      } else if (/[\.1-9\u23B7]+/.test(this.state.display) && this.state.display.length < 10) {
        this.setState({
          display: this.state.display.concat(num)
          //input: this.state.input.concat(num)
        });
      } else if (/[\+\-×÷%]/.test(this.state.display) || this.state.display === '0') {
        this.setState({
          display: num
          //input: this.state.input.concat(num)
        });
      }
    } }, { key: 'handleSqRoot', value: function handleSqRoot()

    {
      if (!/^0\.$|^\d*\u23B7+\d*/.test(this.state.display)) {
        this.handleNatural('\u23B7');
      }
    } }, { key: 'handlePercentage', value: function handlePercentage()
    {
      if (/[1-9]/.test(this.state.display) && this.state.display[this.state.display.length - 1] !== '.' && !/%/.test(this.state.display)) {
        this.handleNatural('%');
      }
    } }, { key: 'handleDivide', value: function handleDivide()
    {
      this.handleBasicOperator('÷');
    } }, { key: 'handleMultiply', value: function handleMultiply()
    {
      this.handleBasicOperator('×');
    } }, { key: 'handleSubtract', value: function handleSubtract()
    {
      this.handleBasicOperator('-');
    } }, { key: 'handleAdd', value: function handleAdd()
    {
      this.handleBasicOperator('+');
    } }, { key: 'handleEquals', value: function handleEquals()
    {
      if (/[^\+\-×÷]/.test(this.state.display)) {
        //if (/^\u23B7*\d+\.*\d*%*$|^\d+\u23B7+\d+%*$/.test(this.state.display)) { 
        /*this.setState({
          input: this.state.input.concat(this.state.display)
        });*/
        //console.log(this.state.input + this.state.display);
        var input = (this.state.input + this.state.display).split('');
        var expression = [];
        input.forEach(function (char) {
          if (/\d|[\+\-\.]/.test(char)) {
            expression.push(char);
          } else if (char === '×') {
            expression.push('*');
          } else if (char === '÷') {
            expression.push('/');
          } else if (char === '\u23B7') {
            expression.push('Math.sqrt');
          } else if (char === '%') {
            expression.push('/100');
          }
        });
        expression = expression.join('').replace(/(\d+)Math\.sqrt(\d+)/g, '$1*Math.sqrt($2)').replace(/Math\.sqrt(\d+)/g, 'Math.sqrt($1)');
        //console.log(expression);
        var output = parseFloat(eval(expression).toPrecision(8)).toString();
        this.setState({
          display: output,
          input: this.state.input + this.state.display,
          flagNew: true });

      }
    } }, { key: 'handleDecimal', value: function handleDecimal()

    {
      if (this.state.display === '0') {
        this.setState({
          display: this.state.display.concat('.')
          //input: this.state.input[this.state.input.length - 1] === '0' ? this.state.input.concat('.') : this.state.input.concat('0.')
        });
      } else if (/[\+\-×÷\u23B7%]/.test(this.state.display)) {
        this.setState({
          display: '0.'
          //input: this.state.input.concat('0.')
        });
      } else if (/^[1-9][0-9]*/.test(this.state.display) && /^\d*[^\.]\d*$/.test(this.state.display) && this.state.display.length < 10) {
        this.setState({
          display: this.state.display.concat('.')
          //input: this.state.input.concat('.')
        });
      }
    } }, { key: 'handleNine', value: function handleNine()
    {
      this.handleNatural('9');
    } }, { key: 'handleEight', value: function handleEight()
    {
      this.handleNatural('8');
    } }, { key: 'handleSeven', value: function handleSeven()
    {
      this.handleNatural('7');
    } }, { key: 'handleSix', value: function handleSix()
    {
      this.handleNatural('6');
    } }, { key: 'handleFive', value: function handleFive()
    {
      this.handleNatural('5');
    } }, { key: 'handleFour', value: function handleFour()
    {
      this.handleNatural('4');
    } }, { key: 'handleThree', value: function handleThree()
    {
      this.handleNatural('3');
    } }, { key: 'handleTwo', value: function handleTwo()
    {
      this.handleNatural('2');
    } }, { key: 'handleOne', value: function handleOne()
    {
      this.handleNatural('1');
    } }, { key: 'handleZero', value: function handleZero()
    {
      if (/[\.1-9]+/.test(this.state.display) && this.state.display.length < 10) {
        this.setState({
          display: this.state.display.concat('0')
          //input: this.state.input.concat('0')
        });
      } else if (/[\+\-×÷\u23B7%]/.test(this.state.display)) {
        this.setState({
          display: '0'
          //input: this.state.input.concat('0')
        });
      } else if (this.state.display === '0' && this.state.input === '') {
        this.setState({
          //input: this.state.input.concat('0')
        });
      }
    } }, { key: 'componentDidMount', value: function componentDidMount()
    {
      document.addEventListener('keydown', this.handleKeyPress);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyPress);
    } }, { key: 'handleKeyPress', value: function handleKeyPress(
    event) {
      var lookupObj = {
        zero: 48,
        one: 49,
        two: 50,
        three: 51,
        four: 52,
        five: 53,
        six: 54,
        seven: 55,
        eight: 56,
        nine: 57,
        decimal: 190,
        add: 187,
        subtract: 189,
        multiply: 77,
        divide: 68,
        equals: 13,
        'sq-root': 82,
        percentage: 80,
        clear: 8 };

      for (var prop in lookupObj) {
        if (event.keyCode === lookupObj[prop]) {
          document.getElementById(prop).click();
        }
      }
    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement('div', { id: 'calculator' },
            React.createElement('div', { id: 'lcd' },
              React.createElement('div', { id: 'input' }, this.state.input),
              React.createElement('div', { id: 'display' }, this.state.display)),

            React.createElement('div', { id: 'pad-container' },
              React.createElement('button', { id: 'clear', className: 'btn calc-pad', onClick: this.handleClear }, 'CE'),
              React.createElement('button', { id: 'sq-root', className: 'btn calc-pad', onClick: this.handleSqRoot }, '\u23B7'),
              React.createElement('button', { id: 'percentage', className: 'btn calc-pad', onClick: this.handlePercentage }, '%'),
              React.createElement('button', { id: 'divide', className: 'btn calc-pad', onClick: this.handleDivide }, '\xF7'),
              React.createElement('button', { id: 'seven', className: 'btn calc-pad', onClick: this.handleSeven }, '7'),
              React.createElement('button', { id: 'eight', className: 'btn calc-pad', onClick: this.handleEight }, ' 8'),
              React.createElement('button', { id: 'nine', className: 'btn calc-pad', onClick: this.handleNine }, '9'),
              React.createElement('button', { id: 'multiply', className: 'btn calc-pad', onClick: this.handleMultiply }, '\xD7'),
              React.createElement('button', { id: 'four', className: 'btn calc-pad', onClick: this.handleFour }, '4'),
              React.createElement('button', { id: 'five', className: 'btn calc-pad', onClick: this.handleFive }, ' 5'),
              React.createElement('button', { id: 'six', className: 'btn calc-pad', onClick: this.handleSix }, '6'),
              React.createElement('button', { id: 'subtract', className: 'btn calc-pad', onClick: this.handleSubtract }, '-'),
              React.createElement('button', { id: 'one', className: 'btn calc-pad', onClick: this.handleOne }, '1'),
              React.createElement('button', { id: 'two', className: 'btn calc-pad', onClick: this.handleTwo }, ' 2'),
              React.createElement('button', { id: 'three', className: 'btn calc-pad', onClick: this.handleThree }, '3'),
              React.createElement('button', { id: 'add', className: 'btn calc-pad', onClick: this.handleAdd }, '+'),
              React.createElement('button', { id: 'zero', className: 'btn calc-pad', onClick: this.handleZero }, '0'),
              React.createElement('button', { id: 'decimal', className: 'btn calc-pad', onClick: this.handleDecimal }, '.'),
              React.createElement('button', { id: 'equals', className: 'btn calc-pad', onClick: this.handleEquals }, '='))),


          React.createElement('div', { id: 'credit' }, 'Javascript Calculator By',

            React.createElement('br', null),
            React.createElement('a', { href: 'https://codepen.io/yoelvis', target: '_blank' }, 'Yoelvis Jimenez'))));



    } }]);return BasicCalculator;}(React.Component);


ReactDOM.render(React.createElement(BasicCalculator, null), document.getElementById('root'));