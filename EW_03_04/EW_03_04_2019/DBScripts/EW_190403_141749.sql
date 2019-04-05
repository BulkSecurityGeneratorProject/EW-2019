-- Evento [ent3]
create table `evento` (
   `oid`  integer  not null,
   `horainicio`  datetime,
   `horafim`  datetime,
   `n_participantes`  integer,
   `estado`  varchar(255),
   `vencedor`  varchar(255),
   `evento_equipa`  bit,
   `odd_empate`  double precision,
   `desporto`  varchar(255),
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


-- Evento_Aposta [rel7]
create table `evento_aposta` (
   `evento_oid`  integer not null,
   `aposta_oid`  integer not null,
  primary key (`evento_oid`, `aposta_oid`)
);
alter table `evento_aposta`   add index fk_evento_aposta_evento (`evento_oid`), add constraint fk_evento_aposta_evento foreign key (`evento_oid`) references `evento` (`oid`);
alter table `evento_aposta`   add index fk_evento_aposta_aposta (`aposta_oid`), add constraint fk_evento_aposta_aposta foreign key (`aposta_oid`) references `aposta` (`oid`);


