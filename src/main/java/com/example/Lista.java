package com.example;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Lista {
	@Id
	private String id;
	private String nome;
	private String telefone;
	public Lista() {
	this.id = UUID.randomUUID().toString();
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getId() {
		return id;
	}
	
}
