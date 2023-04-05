const testData = [
    {
      '1': 12340823051203,
      foo: true,
      bar: 'baz secondstring ',
      number: 1,
      wrong: 'abedof'
    },
    [
      [ [Array], true ],
      [ [Array], 'baz secondstring ' ],
      [ [Array], 1 ],
      [ [Array], 12340823051203 ],
      [ [Array], 'abedof' ]
    ],
    [
      [ [Array], true ],
      [ [Array], 'baz secondstring ' ],
      [ [Array], 1 ],
      [ [Array], 12340823051203 ],
      [ [Array], 'abedof' ]
    ],
    '--foo --bar baz secondstring --number 1 --1 12340823051203 --wrong abedof'
  ];

export default  testData;
  