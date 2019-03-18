-- Evento [ent3]
create table `evento` (
   `oid`  integer  not null,
   `horainicio`  date,
   `horafim`  date,
   `n_participantes`  integer,
   `estado`  varchar(255),
   `vencedor`  varchar(255),
   `evento_equipa`  bit,
   `odd_empate`  double precision,
  primary key (`oid`)
);


-- Participante [ent4]
create table `participante` (
   `oid`  integer  not null,
   `nome`  varchar(255),
   `odd_vencer`  double precision,
   `equipa`  varchar(255),
  primary key (`oid`)
);


-- Participante_Evento [rel1]
create table `participante_evento` (
   `participante_oid`  integer not null,
   `evento_oid`  integer not null,
  primary key (`participante_oid`, `evento_oid`)
);
alter table `participante_evento`   add index fk_participante_evento_partici (`participante_oid`), add constraint fk_participante_evento_partici foreign key (`participante_oid`) references `participante` (`oid`);
alter table `participante_evento`   add index fk_participante_evento_evento (`evento_oid`), add constraint fk_participante_evento_evento foreign key (`evento_oid`) references `evento` (`oid`);


