const periodicTableFull=require("./utils/periodic-table")

export default function calculateMolarMass(formula) {
    // Define a dictionary of atomic weights
    const atomicWeights = {
        'H': 1.008,
        'C': 12.01,
        'N': 14.01,
        'O': 16.00,
        'P': 30.97,
        'S': 32.06,
        // Add more elements as needed
    };

    // Initialize the molar mass to 0
    let molarMass = 0;

    // Split the formula into individual elements
    let elements = formula.match(/[A-Z][a-z]?|\d+\.\d+|\d+/g);

    // Iterate through the elements and calculate the molar mass
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let weight = atomicWeights[element];
        let subscript = 1;

        // Check if the next element is a subscript
        if (i < elements.length - 1 && !isNaN(elements[i + 1])) {
            subscript = parseInt(elements[i + 1]);
            i++;
        }

        // Add the weight of the element multiplied by the subscript to the molar mass
        molarMass += weight * subscript;
    }

    // Return the final molar mass
    return molarMass;
}




// ====PLANETINC SOURCE========




function Calculate( formulae, periodic, result) {var is_error = 0;
    var is_cap = 1;
    var is_small = 2;
    var is_digit = 3;
    
    var state_initial = 0;
    var state_upper = 1;
    var state_lower = 2;
    var state_digit = 3;
    
    function gettype(ch) {
        var cap = "QWERTYUIOPASDFGHJKLZXCVBNM";
        if (cap.indexOf(ch) != -1)
            return is_cap;
        var small = "qwertyuiopasdfghjklzxcvbnm";
        if (small.indexOf(ch) != -1)
            return is_small;
        var digits = "1234567890";
        if (digits.indexOf(ch) != -1)
            return is_digit;
        return is_error;
    }
    
    function StateMachine()
    {
        this.curstate = state_initial;
    
        this.elements = new Array();
        this.amounts = new Array();
    
        this.curelement = "";
        this.curamount = 1;
    
        this.Complete = function()
        {
            this.elements[this.elements.length] = this.curelement;
            this.amounts[this.amounts.length] = this.curamount;		
        }
    
        this.React = function(ch)
        {
            switch(this.curstate)
            {
                case state_initial:
                this.Initial(ch);
                break;
                case state_upper:
                this.Upper(ch);
                break;
                case state_lower:
                this.Lower(ch);
                break;
                case state_digit:
                this.Digit(ch);
                break;
                default:
                break;
            }
        }
    
        this.Initial = function(ch)
        {
            var type = gettype(ch);	
            switch(type)
            {
                case is_error:
                break;
                case is_cap:
                this.curelement = ch;
                this.curamount = 1;
                this.curstate = state_upper;
                break;
                case is_small:
                this.curelement = ch.toUpperCase();
                this.curamount = 1;
                this.curstate = state_upper;
                break;
                case is_digit:
                break;
            }
        }
        this.Upper = function(ch)
        {
            var type = gettype(ch);	
            switch(type)
            {
                case is_error:
                break;
                case is_cap:
                this.elements[this.elements.length] = this.curelement;
                this.amounts[this.amounts.length] = this.curamount;
                this.curelement = ch;
                this.curamount = 1;
                this.curstate = state_upper;
                break;
                case is_small:
                this.curelement += ch;
                this.curstate = state_lower;
                break;
                case is_digit:
                this.curamount = ch;
                this.curstate = state_digit;
                break;
            }
        }
        this.Lower = function(ch)
        {
            var type = gettype(ch);	
            switch(type)
            {
                case is_error:
                break;
                case is_cap:
                this.elements[this.elements.length] = this.curelement;
                this.amounts[this.amounts.length] = this.curamount;
                this.curelement = ch;
                this.curamount = 1;
                this.curstate = state_upper;
                break;
                case is_small:
                this.elements[this.elements.length] = this.curelement;
                this.amounts[this.amounts.length] = this.curamount;
                this.curelement = ch.toUpperCase();
                this.curamount = 1;
                this.curstate = state_upper;
                break;
                case is_digit:
                this.curamount = ch;
                this.curstate = state_digit;
                break;
            }
        }
        this.Digit = function(ch)
        {
            var type = gettype(ch);	
            switch(type)
            {
                case is_error:
                break;
                case is_cap:
                this.elements[this.elements.length] = this.curelement;
                this.amounts[this.amounts.length] = this.curamount;
                this.curelement = ch;
                this.curamount = 1;
                this.curstate = state_upper;
                break;
                case is_small:
                this.elements[this.elements.length] = this.curelement;
                this.amounts[this.amounts.length] = this.curamount;
                this.curelement = ch.toUpperCase();
                this.curamount = 1;
                this.curstate = state_upper;
                break;
                case is_digit:
                this.curamount += ch;
                this.curstate = state_digit;
                break;
            }
        }	
    }
    
    var sm = new StateMachine();
    for(var i = 0; i < formulae.length; ++i) 
        sm.React(formulae.charAt(i));
    sm.Complete();
    
    function GetAtomMass(elem)
    {
        for(var i in periodic)
        {
            if (periodic[i].symbol == elem)
                return periodic[i].atomic_mass;
        }
        return 0;
    }
    
    for(var i in sm.elements)
    {
        var row = result.AddNewRecord();
        row.elem = sm.elements[i];
        row.mul = sm.amounts[i];
        row.am = GetAtomMass(sm.elements[i]);
        if (0 == row.am) 
        {
            row.am = "?";
            row.mul = "?";
            row.res = "?";
            sm.amounts[i] = 0;
        }
        else
        {
            row.res = sm.amounts[i] * row.am;
            sm.amounts[i] = row.res;
        }
    }
    
    var row = result.AddNewRecord();
    row.elem = formulae;
    row.mul = "";
    row.am = "";
    var res = 0;
    for(var i in sm.amounts)
    {
        var amount = sm.amounts[i];
        if (0 == amount)
        {
            res = 0;
            break;
        }
        res += amount;
    }
    if (0 == res)
        row.res = "?";
    else 
        row.res = res;
    }