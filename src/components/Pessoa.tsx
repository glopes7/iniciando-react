type PessoaProps = {
  name: string;
};

export function Pessoa(props: PessoaProps) {
  return <h1>{props.name}</h1>;
}
