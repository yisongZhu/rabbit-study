package com.rabbit.dto;

import com.rabbit.model.TestbusinessUi;
import com.rabbit.model.TestcaseUi;
import lombok.Data;

@Data
public class TestbusinessUiDto extends TestbusinessUi {
	private static final long serialVersionUID = 1L;
//	private Long jobId;
	private String projectName;
	private Integer isValid;
	private Integer sort;//排序
}
