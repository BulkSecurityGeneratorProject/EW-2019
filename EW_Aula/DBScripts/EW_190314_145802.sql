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


-- Aposta_Participante [rel4]
alter table `aposta`  add column  `oid`  integer;
alter table `aposta`   add index fk_aposta_participante (`oid`), add constraint fk_aposta_participante foreign key (`oid`) references `participante` (`oid`);


