describe('Add Chocolates',function(){
    it('Adding chocolates to the list',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var color="orange"
        var count=4
        expect(addChocolates(chocolates,color,count)).toEqual([
            'orange',  'orange',  'orange',  'orange',  'green',   'green',
            'green',   'silver',  'blue',    'crimson', 'purple',  'red',
            'crimson', 'purple',  'purple',  'green',   'pink',    'blue',
            'red',     'silver',  'crimson', 'purple',  'silver',  'silver',
            'red',     'green',   'red',     'silver',  'pink',    'crimson',
            'purple',  'green',   'red',     'silver',  'crimson', 'pink',
            'silver',  'blue',    'pink',    'crimson', 'crimson', 'crimson',
            'red',     'purple',  'purple',  'green',   'pink',    'blue',
            'red',     'crimson', 'silver',  'purple',  'purple',  'purple',
            'red',     'purple',  'red',     'blue',    'silver',  'green',
            'crimson', 'silver',  'blue',    'crimson', 'purple',  'green',
            'pink',    'green',   'red',     'silver',  'crimson', 'blue',
            'green',   'red',     'red',     'pink',    'blue',    'silver',
            'pink',    'crimson', 'purple',  'green',   'red',     'blue',
            'red',     'purple',  'silver',  'blue',    'pink',    'silver',
            'crimson', 'silver',  'blue',    'purple',  'purple',  'green',
            'blue',    'blue',    'red',     'red',,    'silver',   'purple',
            'silver',   'crimson'
          ])
    })
    it('Adding only one chocolate',function(){
        var choco=['green']
        var color='purple'
        var count=1
        expect(addChocolates(choco,color,count)).toEqual(['purple', 'green'])
    })
    it('Checking with count as 0',function(){
        var choco=['green']
        var color='purple'
        var count=0
        expect(addChocolates(choco,color,count)).toEqual(['green'])
    })
});
describe('Remove Chocolates',function(){
    it('Remove n no. of chocolates',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var count=4
        expect(removeChocolates(chocolates,count)).toEqual([
            'blue',    'crimson', 'purple',  'red',     'crimson', 'purple',
            'purple',  'green',   'pink',    'blue',    'red',     'silver',
            'crimson', 'purple',  'silver',  'silver',  'red',     'green',
            'red',     'silver',  'pink',    'crimson', 'purple',  'green',
            'red',     'silver',  'crimson', 'pink',    'silver',  'blue',
            'pink',    'crimson', 'crimson', 'crimson', 'red',     'purple',
            'purple',  'green',   'pink',    'blue',    'red',     'crimson',
            'silver',  'purple',  'purple',  'purple',  'red',     'purple',
            'red',     'blue',    'silver',  'green',   'crimson', 'silver',
            'blue',    'crimson', 'purple',  'green',   'pink',    'green',
            'red',     'silver',  'crimson', 'blue',    'green',   'red',
            'red',     'pink',    'blue',    'silver',  'pink',    'crimson',
            'purple',  'green',   'red',     'blue',    'red',     'purple',
            'silver',  'blue',    'pink',    'silver',  'crimson', 'silver',
            'blue',    'purple',  'purple',  'green',   'blue',    'blue',
            'red',     'red',     'silver',  'purple',  'silver',  'crimson'
          ])
        expect(removeChocolates(chocolates,10)).toEqual(["purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
        "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
        "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
        "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
        "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
        "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
        "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
        "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
        "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"])
    })
    it('Remove all the chocolates',function(){
        var chocolate=['green','red','pink','purple']
        var count=chocolate.length
        expect(removeChocolates(chocolate,count)).toEqual([])
    })
    it('Remove no chocolates',function(){
        var chocolate=['green','red','pink','purple']
        var count=0
        expect(removeChocolates(chocolate,count)).toEqual(['green','red','pink','purple'])
    })
})
describe('Dispense Chocolates',function(){
    it('Dispense n no. of chocolates',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var count=4;
        expect(dispenseChocolates(chocolates,count)).toEqual(['silver', 'purple', 'silver', 'crimson'])
    })
    it('Dispense all chocolates',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var count=chocolates.length;
        expect(dispenseChocolates(chocolates,count)).toEqual(["green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
        "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
        "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
        "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
        "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
        "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
        "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
        "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
        "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
        "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"])
    })
    it('Dispense no chocolates',function(){
        var chocolate=['purple','green','crimson','red']
        var count=0
        expect(dispenseChocolates(chocolate,count)).toEqual([])
    })
})
describe('Dispense by colors',function(){
    it('Dispense RED chocolates',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var color='red'
        var count=4
        expect(dispenseChocolatesOfColor(chocolates,count,color)).toEqual(['red','red','red','red'])
    })
    it('Dispense chocolates of unknown type',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var color='yellow'
        var count=4
        expect(dispenseChocolatesOfColor(chocolates,count,color)).toEqual([])
    })
})
describe('LED chocos - count',function(){
    it('Fetching count of chocolates in order',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        expect(noOfChocolates(chocolates)).toEqual([
            13, 17, 13, 15,
            17, 16,  9
          ])
    })
})
describe('They taste the same',function(){
    it('Changing chocolate colors',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        let n=16;
        let color="red";
        let finalColor="orange";
        expect(changeChocolateColor(chocolates,n,color,finalColor)).toEqual([
            'green',   'green',   'green',   'silver',  'blue',    'crimson',
            'purple',  'orange',  'crimson', 'purple',  'purple',  'green',
            'pink',    'blue',    'orange',  'silver',  'crimson', 'purple',
            'silver',  'silver',  'orange',  'green',   'orange',  'silver',
            'pink',    'crimson', 'purple',  'green',   'orange',  'silver',
            'crimson', 'pink',    'silver',  'blue',    'pink',    'crimson',
            'crimson', 'crimson', 'red',     'purple',  'purple',  'green',
            'pink',    'blue',    'red',     'crimson', 'silver',  'purple',
            'purple',  'purple',  'red',     'purple',  'red',     'blue',
            'silver',  'green',   'crimson', 'silver',  'blue',    'crimson',
            'purple',  'green',   'pink',    'green',   'red',     'silver',
            'crimson', 'blue',    'green',   'red',     'red',     'pink',
            'blue',    'silver',  'pink',    'crimson', 'purple',  'green',
            'red',     'blue',    'red',     'purple',  'silver',  'blue',
            'pink',    'silver',  'crimson', 'silver',  'blue',    'purple',
            'purple',  'green',   'blue',    'blue',    'red',     'red',
            'silver',  'purple',  'silver',  'crimson'
          ])
    })
})
describe('Convert these heretics!',function(){
    it('Changing all chocolate colors of target',function(){
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        let color="red";
        let finalColor="orange";
        expect(changeChocolateColor(chocolates,color,finalColor)).toEqual(['green',   'green',   'green',   'silver',  'blue',    'crimson',
        'purple',  'orange',  'crimson', 'purple',  'purple',  'green',
        'pink',    'blue',    'orange',  'silver',  'crimson', 'purple',
        'silver',  'silver',  'orange',  'green',   'orange',  'silver',
        'pink',    'crimson', 'purple',  'green',   'orange',  'silver',
        'crimson', 'pink',    'silver',  'blue',    'pink',    'crimson',
        'crimson', 'crimson', 'orange',  'purple',  'purple',  'green',
        'pink',    'blue',    'orange',  'crimson', 'silver',  'purple',
        'purple',  'purple',  'orange',  'purple',  'orange',  'blue',
        'silver',  'green',   'crimson', 'silver',  'blue',    'crimson',
        'purple',  'green',   'pink',    'green',   'orange',  'silver',
        'crimson', 'blue',    'green',   'orange',  'orange',  'pink',
        'blue',    'silver',  'pink',    'crimson', 'purple',  'green',
        'orange',  'blue',    'orange',  'purple',  'silver',  'blue',
        'pink',    'silver',  'crimson', 'silver',  'blue',    'purple',
        'purple',  'green',   'blue',    'blue',    'orange',  'orange',
        'silver',  'purple',  'silver',  'crimson'],16)
     })
})
