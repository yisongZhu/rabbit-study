package com.rabbit.dto;

import com.rabbit.model.TestcaseUi;
import lombok.Data;

@Data
public class TestcaseUiDto extends TestcaseUi {
	private static final long serialVersionUID = 1L;
	private String projectName;
//	private Long businessId;
	private Long businessCaseId;
//	private List<StepUi> testSteps;
	private Integer sort;//排序
}
