-- Aposta [ent5]
create table `aposta` (
   `oid`  integer  not null,
  primary key (`oid`)
);


-- User [User]
alter table `user`  add column  `plafond`  decimal(19,2);


-- User_Aposta [rel2]
alter table `aposta`  add column  `user_oid`  integer;
alter table `aposta`   add index fk_aposta_user (`user_oid`), add constraint fk_aposta_user foreign key (`user_oid`) references `user` (`oid`);


-- Evento_Aposta [rel3]
alter table `aposta`  add column  `evento_oid`  integer;
alter table `aposta`   add index fk_aposta_evento (`evento_oid`), add constraint fk_aposta_evento foreign key (`evento_oid`) references `evento` (`oid`);


