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
})