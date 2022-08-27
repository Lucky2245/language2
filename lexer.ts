import Token from "./token";

export interface GrammarStruct {
  id: string;
  match: string;
}

export default class Lexer {
  private index: number = 0;
  private expr: string = "";
  private regex?: RegExp;
  public tokens: Token[] = [];
  public column: number = 1;
  public line: number = 1;
  public data: string = "";
  public grammar: GrammarStruct[] = {
    id: "newLine",
    match: "\\n" 
  },
  {
    id: "whitespace",
    match: "\\s"
  }
];
private getRegex(){}
public loadDefinition(def: GrammarStruct) {}
public loadGrammar(grammar: GrammarStruct[])
public loadData(data: string) {}
public next(){}
public processAll(){}
public update(){}
public empty(){}
}
private getRegex(){
  if(!this.regex) {
    this.regex = new RegExp(this.expr, "gmu")
  }
}
