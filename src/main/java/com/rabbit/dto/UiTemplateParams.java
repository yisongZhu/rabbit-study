package com.rabbit.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class UiTemplateParams  implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long planLogId;
	private String webip;
	private String webport;
	private String contextpath;
	private String jobname;
	private int businesstime;
	private int businesscount;
	private int casecount;
	private int casesuc;
	private int casefail;
	private int caseskip;
}
